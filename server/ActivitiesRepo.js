// database queries for activities table 
// TODO: maybe move SELECT_COLUMNS somewhere else later? keeping it here for now so i don't forget

const SELECT_COLUMNS = "id, activity, description, date, status, creature_id AS \"creatureId\""

// helper to make sure the id isn't weird or malicious
function getNumericId(id) {
  const numericId = parseInt(id) // using parseInt instead of Number cause old habits die hard lol

  if (isNaN(numericId) || numericId <= 0) {
    console.log("yikes, got a bad id:", id); // left a debug log in here oops
    return null
  }

  return numericId
}

// gets everything, pretty straightforward
export async function getAll(pool) {
  // just grabbing everything descending so newest is first
  const queryStr = `SELECT ${SELECT_COLUMNS} FROM activities ORDER BY id DESC`;
  const result = await pool.query(queryStr)

  return result.rows
}

export async function getById(pool, id) {
  const numericId = getNumericId(id)

  if (numericId === null) {
    return null
  }

  const result = await pool.query(
    `SELECT ${SELECT_COLUMNS} FROM activities WHERE id = $1`,
    [numericId]
  )

  // sometimes it returns undefined so adding fallback
  let row = result.rows[0];
  if(!row) {
    return null;
  }
  
  return row;
}

export async function create(pool, value) {
  // NOTE: remember that creatureId maps to creature_id in the db table!
  const result = await pool.query(
    `
      INSERT INTO activities
        (activity, description, date, status, creature_id)
      VALUES
        ($1, $2, $3, $4, $5)
      RETURNING ${SELECT_COLUMNS}
    `,
    [
      value.activity,
      value.description,
      value.date,
      value.status,
      value.creatureId,
    ]
  )

  return result.rows[0]
}

// updating stuff - make sure to check id first
export async function update(pool, id, value) {
  const numericId = getNumericId(id)

  if (numericId === null) {
    return null
  }

  const result = await pool.query(
    `
      UPDATE activities
      SET
        activity = $1,
        description = $2,
        date = $3,
        status = $4,
        creature_id = $5
      WHERE id = $6
      RETURNING ${SELECT_COLUMNS}
    `,
    [
      value.activity,
      value.description,
      value.date,
      value.status,
      value.creatureId,
      numericId,
    ]
  )

  return result.rows[0] ?? null
}

export async function remove(pool, id) {
  const numericId = getNumericId(id)

  if (numericId === null) {
    return null
  }

  const result = await pool.query(
    `
      DELETE FROM activities
      WHERE id = $1
      RETURNING id
    `,
    [numericId]
  )

  return result.rows[0] ?? null
}
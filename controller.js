const db = require("./queries");

class controler {
  async createUser(req, res) {
    const { first_name, last_name, age } = req.body;
    const newStudent = await db.query(
      `INSERT INTO students (first_name,last_name,age) values ($1, $2, $3) RETURNING *`,
      [first_name, last_name, age]
    );
    res.json(newStudent.rows[0]);
  }
  async getUser(req, res) {
    const id = req.params.id;
    const user = await db.query("SELECT * FROM students WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
  async getUsers(req, res) {
    const users = await db.query("SELECT * FROM students");
    res.json(users.rows);
  }

  async updateUser(req, res) {
    const { id, first_name, last_name, age } = req.body;
    const user = await db.query(
      "UPDATE students set first_name = $2,last_name = $3, age = $4 WHERE id = $1 RETURNING *",
      [id, first_name, last_name, age]
    );
    res.json(user.rows[0]);
  }
  async deleteUser(req, res) {
    const id = req.params.id;
    const user = await db.query("DELETE FROM students WHERE id = $1", [id]);
    res.json(user.rows[0]);
  }
}
module.exports = new controler();

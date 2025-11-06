import { insertTestUser, getToken, initializeTestDb } from "../helper/test.js"
import { expect } from "chai"

describe("Testing user management", () => {
 const user = { email: "foo2@test.com", password: "password123" }
 before(() => {
 insertTestUser(user)
 })
 it("should sign up", async () => {
  it ('should log in', async () => {
 const response = await fetch("http://localhost:3001/user/signin", {
 method: "post",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({ user })
 })
 const data = await response.json()
 expect(response.status).to.equal(200)
 expect(data).to.include.all.keys(["id", "email", "token"])
 expect(data.email).to.equal(user.email)
 })
  })
})

const index = require("./index");

test("when given name, id, email, officeNum, and position, then generate html card", () => {
  const name = "Jane";
  const id = "1";
  const email = "jane@exmaple.com";
  const officeNum = "123";
  const position = "Manager";

  const result = index.generateCard(name, id, email, officeNum, position);
  console.log(result);
  expect(result).toBe(`<div class="card">
          <div class="top-card">
            <div id="name">Jane</div>
            <div id="position"><i class="fas fa-mug-hot"></i> Manager</div>
          </div>
          <div class="bottom-card">
            <div class="detail-box" id="idNum">ID:1</div>
            <div class="detail-box"  id="email">Email: <a href="mailto:jane@exmaple.com">jane@exmaple.com</a></div>
            <div class="detail-box"  id="github">Phone number: 123</div>
          </div>
        </div>`);
});

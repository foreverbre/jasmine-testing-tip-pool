describe("Servers test (with setup and tear-down)", () => {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', () => {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not add a new server on submitServerInfo() with empty input', () =>{
    serverNameInput.value = '';
    updateServerTable();

    expect(Object.keys(allServers).length).toEqual(0);
    
  });

  it('should update #servertable on updateServerTable()', () => {
    submitServerInfo();
    updateServerTable();

    let tdList = document.querySelectorAll('#serverTable tbody tr td');

    expect(tdList.length).toEqual(3);
    expect(tdList[0].innerText).toEqual('Alice');
    expect(tdList[1].innerText).toEqual('$0.00');
    expect(tdList[2].innerText).toEqual('X');
  });

  // it('should not add a new server on submitServerInfo() with empty input', () =>{
  //   serverNameInput.value = '';
  //   updateServerTable();
    
  //   expect(Object.keys(allServers).toContain('...'));
    
  // });

  afterEach(function() {
    // teardown logic (clean up code)
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = [];
  });
});
// describe("jasmine.objectContaining", function() {
//   var foo;

//   beforeEach(function() {
//     foo = {
//       a: 1,
//       b: 2,
//       bar: "baz"
//     };
//   });

//   it("matches objects with the expect key/value pairs", function() {
//     expect(foo).toEqual(jasmine.objectContaining({
//       bar: "baz"
//     }));
//     expect(foo).not.toEqual(jasmine.objectContaining({
//       c: 37
//     }));
//   });
// });
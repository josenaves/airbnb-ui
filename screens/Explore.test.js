const Explore = require("./Explore")
// @ponicode
describe("componentWillMount", () => {
    let inst

    beforeEach(() => {
        inst = new Explore.default()
    })

    test("0", () => {
        let callFunction = () => {
            inst.componentWillMount()
        }
    
        expect(callFunction).not.toThrow()
    })
})

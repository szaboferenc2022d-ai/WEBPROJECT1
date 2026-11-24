import termekModel from "../models/termekModel";
import termekControlles from "./termekControlles";
import {beforeEach, expect, jest, test} from '@jest/globals';

const termekModelMock = {
    getAll: jest.fn(),
    getById: jest.fn(),
    create: jest.fn()
};

jest.unstable_mockModule("../models/termekModel.js", () =>({
    default: termekModelMock,
}))

const {default: termekControlles} = await import("./termekControlles.js");

const crreateResponse = () => {
    const res = {
        status: jest.fn(),
        json: json.fn(),
    };
    res.status.mockReturnValue(res);
    res.json.mockReslvedValue(res);
    return res;
};

test("Sampla test case", async ()=>{
    //SETUP
    const products = [{ id:1, nev: "Keyboard"}];
    termekModelMock.getAll.mockResolvedValue(products);
    const res = crreateResponse();
   
    //ACT
    const result = await termekControlles.getAll({
    params: {}}, res);

    //ASSERT
    expect (result).toBeUnderfinder();
});

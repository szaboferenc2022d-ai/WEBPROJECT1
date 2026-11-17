import termekControlles from "./termekControlles";
import {describe, expect, jest, test} from '@jest/globals';

const mockedModel = jest.Mock("..models/termekModel");

test("Sampla test case", async ()=>{
    expect(true).toBe(true);
    const reultMock = {};
   
    mockedModel.getAll = jest .fn() .mockReslvedValue([{id: 1, nev: "Termek 1", ar: 1000, keszlet: 10}])

    await termekControlles.getAll({ params: {} }, reultMock)
});

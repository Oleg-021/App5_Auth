import {getFormattedDate} from "../../src/utils/dashboard/expenses/date";


it("get formatted date - 23 december 2022", () => {
    const dec23_2022 = "2022-12-23";
    const date = new Date(dec23_2022);

    expect(getFormattedDate(date)).toEqual(dec23_2022);
})

it("get formatted date - 8 february 2023", () => {
   const date = new Date(2023, 1, 9);

   expect(getFormattedDate(date)).toEqual("2023-02-08")
});

it("not get formatted date -  ", () => {
    const date = new Date(2023, 2, 8);

    expect(getFormattedDate(date)).not.toEqual("2023-02-08")
})
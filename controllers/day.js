var dayModel = require('../models/day');
const mongoose = require("mongoose");
class DayController {
    constructor() {
        this.dayModel = dayModel;
    };
    //lấy thời khóa biểu theo ngày
    async getDayByDay({id}) {
        try {
            let day = await this.dayModel.find({id: id});
            return day[0];
        } catch (e) {
            console.log(e)
        }
    };

    //lây toàn bô thời khóa biểu
    async getAllDay() {
        try {
            let day = await this.dayModel.find();
            return day;
        } catch (e) {
            console.log(e)
        }
    };

    async updateDay(day) {
        try {
          if (Array.isArray(day.subject))
            return await this.dayModel.findOneAndUpdate(
              {
                _id: mongoose.Types.ObjectId(day._id),
              },
              {
                $set: { subject: day.subject },
              }
            );
          throw new Error("Sai format");
        } catch (e) {
          console.log(e)
        }
      }
}
module.exports = new DayController;
import { Schema, model, models } from "mongoose";

const ShowSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    date: {
        type: Date
    },
    startTime: {
        type: String
    },
    creditBalance: {
        type: Number
    }
})

const Show = models.Show || model("Show", ShowSchema);

export default Show;
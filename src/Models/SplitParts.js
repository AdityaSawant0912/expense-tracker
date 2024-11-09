import mongoose from "mongoose";
import { DIRECTIONS, TRANSACTION_TYPES } from "@/lib/constants";
let Schema = mongoose.Schema

const SplitPartsSchema = new mongoose.Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    ledgerId: {
        type: Schema.Types.ObjectId,
        ref: 'Ledger'
    },
    direction: {
        type: String,
        enum: Object.values(DIRECTIONS)
    },
    amount:{
        type: Number
    },
    categories: [{
        type: Schema.Types.ObjectId,
        ref: 'Category'
    }],
    tags: [{
        type: Schema.Types.ObjectId,
        ref: 'Tags'
    }],
    notes: {
        type: String
    }
}, { timestamps: true })

export default mongoose.model.SplitParts || mongoose.model("SplitParts", SplitPartsSchema);
import Product from "@/Schema/Product";
import { connectDb } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";
import { URL } from "url";

export async function GET(req: NextRequest) {
    try {
        await connectDb();

        const url = new URL(req.url ?? '/')
        const params = url.searchParams;
        const category = params.get('category');

        const products = await Product.find({
            category: {
                $regex: category,
                $options: "i",
            },
        });

        return NextResponse.json(products)
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error, message: "Internal Server Error" });
    }
}














import Product from '@/Schema/Product';
import { connectDb } from '@/utils/connect';
import { NextResponse } from 'next/server';


export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      theme,
      size,
      colour,
      price,
      highlights,
      name,
      description,
      tags,
      category,
      images
    } = body;

    connectDb();

    const product = await Product.create({
      theme,
      size,
      colour,
      price,
      highlights,
      name,
      description,
      tags,
      category,
      images
    });

    return NextResponse.json({
      success: true,
      message: 'Product Created Successfully',
      product,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Error creating product',
      error,
    });
  }
}



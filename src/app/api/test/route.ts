// src/app/api/test-db/route.ts
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const userTypes = await prisma.userType.findMany()
    const sports = await prisma.sport.findMany()
    
    return NextResponse.json({ 
      success: true, 
      userTypes, 
      sports,
      message: 'Database connection successful!' 
    })
  } catch (error) {
    console.error('Database error:', error)
    return NextResponse.json({ 
      success: false, 
      error: 'Database connection failed',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 })
  }
}
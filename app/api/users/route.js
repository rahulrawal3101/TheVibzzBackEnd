import Person from '@/app/models/personModal';
import CONNECT_DATABASE from '../../config/connection'

const { NextResponse } = require("next/server");


export async function GET(req){
    await CONNECT_DATABASE();
    const allusers = await Person.find();
    return NextResponse.json({message:'All Users Fetched',resp:allusers});
}

export async function POST(req){
    await CONNECT_DATABASE();
    try{
        const rec = await req.json();
        console.log(rec);
        const scheme =  Person({
            firstName:rec.firstName,
            lastName:rec.lastName,
            email:rec.email,
            mobile:rec.mobile,
            password:rec.password,
            address:rec.address
        });
        const myData = await scheme.save();
        console.log(scheme);
        console.log(myData);
        if(myData){
            return NextResponse.json({message:'User Register Successfully',resp:myData},{status:201});
        }
        else{
            return NextResponse.json({message:'Failed To Register',},{status:403});
        }
    }catch(e){
        console.log(e);
        return NextResponse.json({message:'Internal Server Error'},{status:500});
    }
}

// function PATCH(){}

// function DELETE(){}



//Api Endpoint      https://adelsocial.com/api/users

// function GET(){}

// function POST(){}

// function PATCH(){}

// function DELETE(){}
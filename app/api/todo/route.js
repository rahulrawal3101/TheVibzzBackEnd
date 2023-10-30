import TitleDescription from '@/app/models/titdesModal';
import CONNECT_DATABASE from '../../config/connection';

const { NextResponse } = require("next/server");

export async function GET(req) {
    await CONNECT_DATABASE();
    const details = await TitleDescription.find();
    return NextResponse.json({ message: 'All Users Fetched', resp: details })

};

export async function POST(req) {
    await CONNECT_DATABASE();
    try {
        const titDes = await req.json();
        console.log(titDes);
        const scheme = TitleDescription({
            title: titDes.title,
            description: titDes.description
        });
        const getData = await scheme.save();
        console.log(scheme);
        console.log(getData);
        if(getData){
            return NextResponse.json({message:'Title and description Register Successfully',resp:getData},{status:201})
        }else{
            return NextResponse.json({message:'Failed To Register '},{status:403})
        }

    } catch (err) {
        console.log(err);
        return NextResponse.json({message:'Internal Server Error'},{status:500})

    }

}
import Person from "@/app/models/personModal";
import { NextResponse } from "next/server";

export async function DELETE(req,{params}){
    try{
        console.log('This is Param :',params);
        const deleted = await Person.deleteOne({_id:params.uid});
        if(deleted){
            return NextResponse.json({message:'Deleted Successfully'},{status:200});
        }
    }catch(err){
        console.log(err);
        return NextResponse.json({message:'Internal Server Error'},{status:500})
    }
};
import axios from "axios";
import React, {ChangeEvent, useContext, useEffect, useState} from "react";
import { MyContext } from "./Context";

const Upload = () =>{
    const context = useContext(MyContext);

    const [url, setUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null)
    
    const uploadImage = () =>{


            const form = new FormData();
    
            
            if (file){
                form.append("file", file);
                form.append("upload_preset", "mhaddaou");
                    try{
                        axios.post(`${process.env.Clouad}`, form)
                        .then((result) =>{
                            setUrl(result.data.secure_url);
                            context.setImg(result.data.secure_url);
                            
                        })
                    }catch(e){}  
            }
        }
        const handleChange = (e : ChangeEvent<HTMLInputElement>) =>{
            if (e.target.files )
            setFile(e.target.files[0]);
        }
    return (
        <div className="flex items-center border-b border-slate-600 py-2 justify-center gap-10 pb-5">
                    <label className=" cursor-pointer flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded" >
                        <input onChange={handleChange} type="file" className="hidden" />
                        select file
                    </label>
                    <button onClick={() =>{
                      uploadImage();
                    }} className=" ml-2 flex-shrink-0 bg-slate-500 hover:bg-slate-700 border-slate-500 hover:border-slate-700 text-sm border-4 text-white py-1 px-2 rounded" type="button">
                            Upload
                    </button>
            </div>
    )
}
export default Upload;
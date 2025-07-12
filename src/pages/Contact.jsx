import { Form } from "react-router-dom";

export const handleContactFormData = async({request})=>{
    try{
        const res = await request.formData();
        const data = Object.fromEntries(res);
        console.log(data);
        return null;
    }
    catch(error){
        console.log("error:", error);
    }
}

export const Contact = ()=>{
    return (
        <div>
            <h1>Contact Page</h1>
            <Form method="POST" action="/contact">
                <input type="text" name="username" placeholder="Enter name" required/>
                <input type="text" name="email" placeholder="Enter email" required/>
                <textarea name="query" placeholder="Enter query" required/>
                <button type="submit">Submit</button>
            </Form>
        </div>
    );
}
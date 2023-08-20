import React, { useState, useContext, createContext, Dispatch, SetStateAction, ReactNode, useEffect, use } from "react";


// Headline education country city



export interface ContextTypes {
  name : string;
  setName : Dispatch<SetStateAction<string>>;
  img : string;
  setImg : Dispatch<SetStateAction<string>>;
  email : string;
  setEmail : Dispatch<SetStateAction<string>>;
  area : string ;
  setArea : Dispatch<SetStateAction<string>>;
  phone : number;
  setPhone : Dispatch<SetStateAction<number>>;
  headline : string;
  setHeadline : Dispatch<SetStateAction<string>>;
  education : string;
  setEducation : Dispatch<SetStateAction<string>>;
  country : string;
  setCountry : Dispatch<SetStateAction<string>>;
  city : string;
  setCity : Dispatch<SetStateAction<string>>;
  about : string;
  setAbout : Dispatch<SetStateAction<string>>;

  
}

// types childer
interface ChildProps {
  children: ReactNode;
}

// create context
const MyContext = createContext<ContextTypes | undefined>(undefined);

// create provider

const MyContextProvider = ({ children }: ChildProps) => {
  const [name , setName] = useState('');
  const [img, setImg] = useState('');
  const [email, setEmail] = useState('');
  const [area, setArea] = useState('')
  const [phone, setPhone] = useState(0);
  const [headline, setHeadline] = useState('')
  const [education, setEducation] = useState('')
  const [country, setCountry] = useState('')
  const [city, setCity] = useState('')
  const [about, setAbout] = useState('')

  // load data from localstorage
  useEffect(() => {
    const getName = localStorage.getItem('name');
    const getimg = localStorage.getItem('img');
    const getEmail = localStorage.getItem('email');
    const getPhone = localStorage.getItem('phone');
    const getArea = localStorage.getItem('area');
    const getHeadline = localStorage.getItem('headline');
    const getEducation = localStorage.getItem('education');
    const getCountry = localStorage.getItem('country');
    const getCity = localStorage.getItem('city');
    const getAbout = localStorage.getItem('about');
    if (getName)
      setName(getName);
    if (getimg)
      setName(getimg);
    if (getEmail)
      setName(getEmail);
    if (getPhone){
      const value = parseInt(getPhone);
      setPhone(value);
    }
    if (getArea)
      setArea(getArea);
  if (getHeadline)
    setHeadline(getHeadline);
  if (getEducation)
    setEducation(getEducation);
  if (getCountry)
    setCountry(getCountry)
  if (getCity)
    setCity(getCity);
  if (getAbout)
    setAbout(getAbout);

  }, []);

  //storing information
  useEffect(() =>{
    localStorage.setItem('name', name);
  }, [name])
  useEffect(() =>{
    localStorage.setItem('img', img);
  }, [img])
  useEffect(() =>{
    localStorage.setItem('email', email);
  }, [email])
  useEffect(() =>{
    localStorage.setItem('area', area);
  }, [area])
  useEffect(() =>{
    localStorage.setItem('phone', String(phone));
  }, [phone])
  
  useEffect(() =>{
    localStorage.setItem('headline' , headline);
  },[headline])
  useEffect(() =>{
    localStorage.setItem('education', education);
  },[education])
  useEffect(() =>{
    localStorage.setItem('country', country);
  },[country])
  useEffect(() =>{
    localStorage.setItem('city', city);
  },[city])
  useEffect(() =>{
    localStorage.setItem('about', about);
  },[about])
  // context value

  const ContextValue = {
    name, setName, img, setImg, email, setEmail, area, setArea, phone, setPhone,headline,setHeadline ,education ,setEducation ,country ,setCountry ,city ,setCity ,about ,setAbout
  
  }

  return (
    <MyContext.Provider value={ContextValue}>
      {children}
    </MyContext.Provider>
  );

}

export { MyContext, MyContextProvider };
import axios from "axios";
import { useEffect, useState } from "react"


const useApps=()=>{
const [data,setData]=useState([]);
const [loading,setLoading]=useState(true);
const [eorr,setEorr]=useState(null);
useEffect(()=>{
    setLoading(true)
axios('Allapps.json').then(data=>setData(data.data)).catch(err=>setEorr(err)).finally(()=>setLoading(false))},[])
return{data,loading,eorr}
}

export default useApps
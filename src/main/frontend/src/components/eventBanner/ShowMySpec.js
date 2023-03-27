import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function ShowMySpec() {
    const [userSpec, setUserSpec] = useState([]);
    const [waring, setWaring] = useState(["시스템 정보를 불러오기 위한 파일을 다운로드 중입니다. 다운이 완료되면 실행 시켜 주세요"])

    useEffect(() => {
        const userData = async () => {
            try {
                const response = await axios.get('/MySpec');
                setUserSpec(response.data);
                setWaring("시스템 정보 불러오기 완료"); 
            } catch (error) {
                console.log(error);
            }
        };
        userData();
    },[waring])
    return (
        <div>
            {/* <p>{userSpec}</p> */}
            <p>{waring}</p>
        </div>
    );
}
export default ShowMySpec;












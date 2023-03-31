import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function ShowMySpec() {
    const [userSpec, setUserSpec] = useState([]);
    let waring = "시스템 정보를 불러오기 위한 파일을 다운로드 중입니다. 다운이 완료되면 실행 시켜 주세요"
    const [warning, setWarning] = useState("")

    useEffect(() => {
        const userData = async () => {
            try {
                const response = await axios.get('/MySpec');
                setUserSpec(response.data);
                waring = "시스템 정보 불러오기 완료";
            } catch (error) {
                console.log(error);
            }
        };
        userData();
    },[waring])
    return (
        <div>
            <p>
                {waring}
                {userSpec}
            </p>
        </div>
    );
}
export default ShowMySpec;












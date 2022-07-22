import { Container } from '@/components/layout/quizLayout/button/styles';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
const Button = ({active}) => {
    const router = useRouter();
    const currentUser = router.query['current-user'];
    const level =
        Number(process.browser && localStorage.getItem(currentUser)) ?? Number('1');    
    const clickednext=()=>{
        const [quiznumber,setQuiznumber] = useState(Number(router.query['current-user'].split('/')[1]));
        setQuiznumber(quiznumber+1);
        router.push(`/quiz/${level}?current-user=${currentUser}/${quiznumber}`);
    }
    return(
        <Container active={active} onClick={clickednext}>
            다음
        </Container>
    )
};

export default Button;

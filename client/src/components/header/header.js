import { useState } from 'react'
import styled from 'styled-components'
import { ReactComponent as StackLogo } from '../Icons/logoStackoverflow.svg'
import { ReactComponent as Magnifier } from '../Icons/돋보기.svg'

// 아직은 눌러도 페이지 이동이 안됨 
const Header = () => {
    const [wirte, setWrite] = useState('') // 검색창 글쓰기 구현 

    const changeMsg = (event) => {
        setWrite(event.target.value);
    }

    return (
        <HeaderStyle>
            <header className="s-topbar">
                <a href="…" className="s-topbar--logo"><StackLogo /></a>
                <form id="search" className="s-topbar--searchbar" autocomplete="off">
                    <div className="s-topbar--searchbar--input-group">
                        <input
                            onChange={changeMsg}
                            type="text"
                            placeholder="Search…"
                            value={wirte}
                            autocomplete="off"
                            className="s-input s-input__search" />
                        <Magnifier />
                    </div>
                </form>
                <ol className="s-topbar--content">
                    <li>
                        <a href="…" className="s-topbar--item s-topbar--item__unset s-btn s-btn__filled">Log in</a>
                    </li>
                    <li>
                        <a href="…" className="s-topbar--item s-topbar--item__unset ml4 s-btn s-btn__primary">Sign up</a>
                    </li>
                </ol>
            </header>
        </HeaderStyle>

    )
}

// 헤더 간격 최대한 비슷하게 구현 반응형은 구현하지 않음 
const HeaderStyle = styled.header` 
.s-topbar--logo {
    padding-left : 200px;
    padding-bottom : 10px;
}
.s-btn__primary{
    margin-right: 200px;
}
.s-topbar--searchbar {
    padding-right: 30px;
    padding-left: 30px;
}
`

export default Header
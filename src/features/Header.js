import React from 'react';
import "./Header.css";
import { Avatar, IconButton } from '@material-ui/core';
import {Search,ArrowDropDown,Notifications,Apps,Menu} from '@material-ui/icons';


function Header() {
    return (
        <div className="header">
         <div className="header__left">
             <IconButton>
                 <Menu/>
             </IconButton>
             <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABlCAMAAAB3G4FZAAABAlBMVEX////tQjhHhfQ0qFX9uwXHISMzqFD8/Pzc3N/19fdOT1Xe7eFek+sioklNTVlBg/ZXWF0xevWampyRkpbD1fTJycocoD7oNDdcXWLT09RTVFtxcnbeOC/+vwCsra1UVF/m5ueiwfPHGxyAgYSio6VHSE5fX2loaW2b0Kft09PdmZj27er45LD62on55avQdHHBAADdpqX078/4wR/89d/gsa7NZmP33pz4zVjMW1bZS0D30s/jdHrGPD7trqjy3tblWFLoIybsKRPrgHbrOCeqW3LetgCAXqnCuSZddsyxKUPnioCWsjehRHFurkGHXKDNtyCyJzjMbn16vojW4ve228DXHe72AAADhElEQVRoge2Wa3vTNhSA7bTFkbammo2KYhVL1LFNKRve2LgUaAs1t3HZBfj/f4UjWXENcYibrOF59pz3g2NZcvT6HN08D0EQBEEQBEEQBEEQBEEQBPmvOLh163Bu5e2ff1mjSps7JfBrd91vdzeB39crVPNHuQWU97pCdn/T8mDtUsDD/S0rdvTo6xryeNPxPQL2pPba2vOPv6w4OX26wCsgQz7W5CK9BSSAK7HXvl7Pztqtjyv/2vVvevFUjQARDftrRVkaeESIxa+ce/mV3+QyOHvmT72ud3qRlKoRzfMsFlm0+PPdS1meaY/Q0WKv52XjBWYulyd7ld94bb7o8CKxUtHYfAGXLJv09ArSTAb9vH58uV82Xn51ZobLcWULzuvV7g+zHRR5zqeFMOwbLy/Q0LSf187rP8vGy6+ODg7f1FrO6+3G9qzXJGbj8856a9X09BoM3pX7+87L9/eOnJb1uvt+o8MLstiROuOnOde2BefjqS7c1w9Nk/7xGgx2/irLxusc8Pr7ykaXV6JGszHimfCijMZmyiUUiG2mSWTuqbQqMB8v4DUYvP6n6vJ6e6XbK1Lp7D9xVaRZGknGwgnNo5SJGHKtmVLSFDKT+JBFF/LaGfw7I1advt+e45VO0xgMp4BXnFOIUJAwwVKYProQqQ2XCZuWoljCa/DT1eOvMglTE7Q6vYLGSwsH5JW7QRfEQmhzA4Lmp3bQMdVLeXknR+2QmaVsnpc366UI5DG3Op4Ukf0dU2E3qSFPkjGRZrgt41Uv8s7KP4G63XlekZIucsQQcEZNHkU9GSRLaq/YeI0lzIDRKM/Vsl6woD6ttdxWOdeLq9EX23XICvNw6hW3vIZUxBPOJ0W+dLyAw9OqtR3N9SJMhe1iwSbteLW9UlZoUwiKVbwgl1V1euAt8IIhzfh5KWRmoHd7FS6phK3kBbk8a46u871gbLv+gImyIt15LFgd2VCt6NXiG16QujjlcL7TiYxjO/+64xUqAT4kpCuNr95ecMSjLM5gg2EsqzU4Zc6LOi/KiP0AUdBRmJr1NTSfQLLs8rxgWYoKswnK0E3NsUxrr0jWY28ozbJPQkFpkcBT2IgSCROESKkv0Qs60Fq3jurT805z7nE30Iy4QuCuC7VW8rpMru5Yur22Dbsf1i5l+HjDojuqblo+rdcHQRAEQRAEQRAEQRAEQRAE+R/wGb06YqMnK4t3AAAAAElFTkSuQmCC" alt="logo" />
            
             </div>  

             <div className="header__middle">
             <Search/>
             <input placeholder="Search mail" type="text" />
             <ArrowDropDown className="header__inputCaret"/>
             </div> 

             <div className="header__right">
                 <IconButton> <Apps/></IconButton>
                 <IconButton><Notifications/></IconButton>
                 <Avatar/>
            
             </div> 
        </div>
    )
}

export default Header

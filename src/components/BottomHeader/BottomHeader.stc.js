import styled from 'styled-components';
import {Row} from 'react-bootstrap';
export const BottomHeaderStc = styled(Row)`

   height: 120px;
    -moz-box-align: center;
    align-items: center;
    -moz-box-pack: justify;
    justify-content: space-between;
    font-size: 18px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    text-transform: lowercase;
    max-width:1140px;
    margin-left:auto !important;
    margin-right:auto !important;

    .badge-light {
    color: #000;
    background-color: #ccc;
    border-radius: 100%;
}

   .nav-item a
   {
       color:#000;
       font-weight:500;
       text-decoration: none;
       cursor: pointer;
       padding:0px
   }

   #logo
   {
      position: absolute;
      font-size: 40px;
      bottom: -5px;
      left: 0;
   }
   .nav-item
   {
      margin-left: 1em;
    margin-right: 1em;
    white-space: nowrap;
   }

   a#cart {
    position: absolute;
    right: 0;
   }
`;
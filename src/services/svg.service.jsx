const svgIcons = {
  times: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m6.3 18.9-1.15-1.2 5.675-5.7L5.15 6.25l1.15-1.2 5.725 5.75L17.7 5.05l1.15 1.2L13.175 12l5.675 5.7-1.15 1.2-5.675-5.75Z"/></svg>,
  search: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" fill="#fff"><path d="m19.7 20.8-6.3-6.3q-.75.6-1.838.938-1.087.337-2.087.337-2.675 0-4.512-1.837Q3.125 12.1 3.125 9.45q0-2.65 1.838-4.487Q6.8 3.125 9.45 3.125q2.65 0 4.5 1.838Q15.8 6.8 15.8 9.45q0 1.075-.337 2.1-.338 1.025-.938 1.75l6.35 6.35ZM9.475 14.125q1.975 0 3.325-1.338 1.35-1.337 1.35-3.337T12.8 6.112q-1.35-1.337-3.325-1.337-2 0-3.35 1.337-1.35 1.338-1.35 3.338t1.35 3.337q1.35 1.338 3.35 1.338Z"/></svg>,
  home: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M6.05 19h3.075v-6.2h5.75V19h3.075v-8.95L12 5.55l-5.95 4.5ZM4.4 20.65V9.225L12 3.5l7.6 5.725V20.65h-6.375v-6.2h-2.45v6.2Zm7.6-8.375Z"/></svg>,
  settings: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m9.55 21.8-.4-3.075q-.325-.1-.787-.35-.463-.25-.763-.525l-2.9 1.2-2.425-4.35 2.4-1.85q-.025-.2-.062-.438-.038-.237-.038-.462 0-.2.038-.413.037-.212.062-.487l-2.4-1.8L4.7 5l2.775 1.125q.375-.3.825-.55.45-.25.85-.4l.4-3.025h4.9l.375 3.05q.45.225.838.425.387.2.787.525L19.3 5l2.425 4.25-2.525 1.9q.075.225.075.45v.4q0 .15-.012.375-.013.225-.038.525l2.425 1.8-2.425 4.35-2.9-1.225q-.375.3-.725.512-.35.213-.75.363l-.4 3.1Zm2.35-6.65q1.325 0 2.263-.938.937-.937.937-2.262t-.937-2.262q-.938-.938-2.263-.938t-2.262.938q-.938.937-.938 2.262t.938 2.262q.937.938 2.262.938Zm0-1.65q-.65 0-1.1-.45-.45-.45-.45-1.1 0-.65.45-1.1.45-.45 1.1-.45.65 0 1.1.45.45.45.45 1.1 0 .65-.45 1.1-.45.45-1.1.45Zm.075-1.525Zm-1 8.175h1.975l.375-2.725q.775-.2 1.413-.562.637-.363 1.312-1.013l2.425 1.05 1.025-1.7-2.125-1.65q.125-.425.175-.812.05-.388.05-.788t-.038-.738q-.037-.337-.162-.837l2.15-1.625-.975-1.7-2.525 1.025q-.45-.525-1.238-.987-.787-.463-1.512-.613L13.025 3.8H10.95l-.25 2.65q-.85.175-1.537.575-.688.4-1.313 1.05L5.425 7.05 4.4 8.75l2.1 1.625q-.125.425-.175.825-.05.4-.05.75 0 .325.05.725.05.4.15.9L4.4 15.2l1.025 1.7 2.425-1.025q.7.65 1.363 1.012.662.363 1.462.563Z"/></svg>,
  more: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M12 19.8q-.575 0-.962-.4-.388-.4-.388-.975 0-.55.4-.937.4-.388.95-.388.575 0 .963.388.387.387.387.962 0 .55-.4.95-.4.4-.95.4Zm0-6.45q-.575 0-.962-.4-.388-.4-.388-.95 0-.575.4-.963.4-.387.95-.387.575 0 .963.4.387.4.387.95 0 .575-.4.962-.4.388-.95.388Zm0-6.45q-.575 0-.962-.388-.388-.387-.388-.962 0-.55.4-.95.4-.4.95-.4.575 0 .963.4.387.4.387.975 0 .55-.4.937-.4.388-.95.388Z"/></svg>,
  share: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M18.125 21.95q-1.2 0-2.038-.825-.837-.825-.837-2.025 0-.175.038-.388.037-.212.112-.387l-7.5-4.35q-.4.4-.925.612-.525.213-1.075.213-1.2 0-2.05-.838Q3 13.125 3 11.95q0-1.2.85-2.025T5.9 9.1q.55 0 1.075.212.525.213.925.613l7.5-4.35q-.075-.2-.112-.4-.038-.2-.038-.375 0-1.2.837-2.025.838-.825 2.038-.825 1.2 0 2.038.837Q21 3.625 21 4.8q0 1.2-.85 2.025t-2.05.825q-.55 0-1.075-.213-.525-.212-.925-.612l-7.5 4.35q.075.175.113.375.037.2.037.4 0 .175-.037.387-.038.213-.113.388l7.5 4.35q.4-.4.925-.613.525-.212 1.075-.212 1.2 0 2.05.837.85.838.85 2.013 0 1.2-.837 2.025-.838.825-2.038.825Zm0-15.95q.5 0 .863-.363.362-.362.362-.862t-.362-.863q-.363-.362-.863-.362t-.862.362q-.363.363-.363.863t.363.862q.362.363.862.363Zm-12.25 7.15q.5 0 .863-.363.362-.362.362-.862t-.362-.863q-.363-.362-.863-.362t-.862.362q-.363.363-.363.863t.363.862q.362.363.862.363Zm12.25 7.15q.5 0 .863-.362.362-.363.362-.863t-.362-.863q-.363-.362-.863-.362t-.862.362q-.363.363-.363.863t.363.863q.362.362.862.362Zm0-15.525Zm-12.25 7.15Zm12.25 7.15Z"/></svg>,
  trash: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.525 20.8q-.975 0-1.625-.65t-.65-1.625V5.9h-1V4.25h4.7v-.975h6.15v.975h4.7V5.9h-1v12.625q0 .975-.65 1.625t-1.625.65ZM17.15 5.9H6.9v12.625q0 .275.175.45t.45.175h9q.25 0 .438-.188.187-.187.187-.437ZM9.275 17.125h1.65v-9.2h-1.65Zm3.85 0h1.65v-9.2h-1.65ZM6.9 5.9v13.25-.625Z"/></svg>,
  check: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M9.55 17.85 3.975 12.3l1.175-1.175 4.4 4.4 9.35-9.35 1.175 1.175Z"/></svg>,
  person: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M18.225 13.7v-3.05h-3.05V9h3.05V5.95h1.65V9h3.05v1.65h-3.05v3.05ZM9 11.075q-1.5 0-2.525-1.025T5.45 7.525q0-1.475 1.025-2.513Q7.5 3.975 9 3.975t2.525 1.037Q12.55 6.05 12.55 7.525q0 1.5-1.025 2.525T9 11.075ZM1.25 20.15v-2.425q0-.8.413-1.45.412-.65 1.112-1 1.525-.75 3.088-1.125 1.562-.375 3.137-.375t3.138.375q1.562.375 3.087 1.125.7.35 1.112 1 .413.65.413 1.45v2.425ZM2.9 18.5h12.2v-.775q0-.35-.162-.588-.163-.237-.463-.387-1.275-.6-2.7-.963-1.425-.362-2.775-.362-1.35 0-2.775.362-1.425.363-2.7.963-.3.15-.463.387-.162.238-.162.588ZM9 9.425q.8 0 1.35-.55t.55-1.35q0-.8-.55-1.35T9 5.625q-.8 0-1.35.55t-.55 1.35q0 .8.55 1.35t1.35.55Zm0-1.9ZM9 18.5Z"/></svg>,
  darkMode: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M13.1 22.325q-1.95 0-3.662-.738-1.713-.737-3-2.025-1.288-1.287-2.025-3-.738-1.712-.738-3.662 0-3.15 1.85-5.613 1.85-2.462 4.875-3.312-.025 2.35.713 4.575.737 2.225 2.437 3.9 1.675 1.7 3.9 2.437 2.225.738 4.575.638-.825 3.05-3.3 4.925-2.475 1.875-5.625 1.875Zm0-1.65q1.975 0 3.688-.937 1.712-.938 2.787-2.588-2.05-.275-3.887-1.175-1.838-.9-3.313-2.4-1.475-1.475-2.387-3.3Q9.075 8.45 8.825 6.4 7.175 7.475 6.25 9.2q-.925 1.725-.925 3.7 0 3.25 2.263 5.513 2.262 2.262 5.512 2.262Zm-.725-7.1Z"/></svg>,
  lightMode: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.175 5.75V1.725h1.65V5.75ZM17 8.15l-1.125-1.125 2.8-2.9L19.85 5.3Zm1.25 4.675v-1.65h4.025v1.65Zm-7.075 9.45v-4h1.65v4ZM7.05 8.125l-2.95-2.8L5.35 4.2 8.175 7ZM18.7 19.85l-2.825-2.875 1.125-1.1 2.825 2.8ZM1.725 12.825v-1.65H5.75v1.65Zm3.575 7.05L4.2 18.65l2.775-2.775.6.55.6.625ZM12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17Zm0-1.65q1.4 0 2.375-.975.975-.975.975-2.375t-.975-2.375Q13.4 8.65 12 8.65t-2.375.975Q8.65 10.6 8.65 12t.975 2.375q.975.975 2.375.975ZM12 12Z"/></svg>,
  location: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M11.175 22.525v-1.8q-3.2-.325-5.387-2.5Q3.6 16.05 3.275 12.85h-1.8V11.2h1.8Q3.6 8 5.788 5.8q2.187-2.2 5.387-2.525v-1.8h1.65v1.8q3.2.325 5.388 2.525Q20.4 8 20.725 11.2h1.8v1.65h-1.8q-.325 3.2-2.512 5.375-2.188 2.175-5.388 2.5v1.8Zm.85-3.45q2.975 0 5.025-2.05Q19.1 14.975 19.1 12q0-2.975-2.05-5.025-2.05-2.05-5.025-2.05-2.975 0-5.025 2.05Q4.95 9.025 4.95 12q0 2.975 2.05 5.025 2.05 2.05 5.025 2.05Z"/></svg>,
  favorite: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m12 20.55-1.15-1.075q-2.675-2.5-4.362-4.2-1.688-1.7-2.65-2.95-.963-1.25-1.3-2.275Q2.2 9.025 2.2 7.95q0-2.175 1.525-3.688Q5.25 2.75 7.45 2.75q1.225 0 2.4.612 1.175.613 2.15 1.788.975-1.175 2.15-1.788 1.175-.612 2.4-.612 2.2 0 3.725 1.512Q21.8 5.775 21.8 7.95q0 1.075-.338 2.1-.337 1.025-1.299 2.275-.963 1.25-2.638 2.95-1.675 1.7-4.375 4.2Zm0-2.25q2.45-2.25 4.025-3.825 1.575-1.575 2.5-2.738.925-1.162 1.275-2.037.35-.875.35-1.75 0-1.525-1.012-2.538Q18.125 4.4 16.55 4.4q-1.15 0-2.187.7-1.038.7-1.563 1.825h-1.6q-.55-1.15-1.575-1.838Q8.6 4.4 7.45 4.4q-1.55 0-2.575 1.012Q3.85 6.425 3.85 7.95q0 .875.35 1.75t1.275 2.037q.925 1.163 2.5 2.725Q9.55 16.025 12 18.3Zm0-6.95Z"/></svg>,
  back: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M10.25 21.9.325 11.975 10.25 2.05l1.5 1.475-8.45 8.45 8.45 8.45Z"/></svg>,
  forward: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M7.925 21.9 6.45 20.425l8.425-8.45-8.425-8.45L7.925 2.05l9.95 9.925Z"/></svg>,
  expand: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3.175 20.825v-7.65h1.65v4.85l13.2-13.2h-4.85v-1.65h7.65v7.65h-1.65v-4.85l-13.2 13.2h4.85v1.65Z"/></svg>,
  gridView: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3.2 11V3.2H11V11Zm0 9.8V13H11v7.8ZM13 11V3.2h7.8V11Zm0 9.8V13h7.8v7.8ZM4.85 9.35h4.5v-4.5h-4.5Zm9.8 0h4.5v-4.5h-4.5Zm0 9.8h4.5v-4.5h-4.5Zm-9.8 0h4.5v-4.5h-4.5Zm9.8-9.8Zm0 5.3Zm-5.3 0Zm0-5.3Z"/></svg>,
  listView: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M5.475 10.825q-.975 0-1.625-.663Q3.2 9.5 3.2 8.55V5.725q0-.95.65-1.6.65-.65 1.625-.65h13.05q.975 0 1.625.65t.65 1.6V8.55q0 .95-.65 1.612-.65.663-1.625.663Zm0-1.65h13.05q.25 0 .438-.2.187-.2.187-.425V5.725q0-.225-.187-.413-.188-.187-.438-.187H5.475q-.25 0-.437.187-.188.188-.188.413V8.55q0 .225.188.425.187.2.437.2Zm0 11.35q-.975 0-1.625-.65t-.65-1.6V15.45q0-.95.65-1.613.65-.662 1.625-.662h13.05q.975 0 1.625.662.65.663.65 1.613v2.825q0 .95-.65 1.6-.65.65-1.625.65Zm0-1.65h13.05q.25 0 .438-.187.187-.188.187-.413V15.45q0-.225-.187-.425-.188-.2-.438-.2H5.475q-.25 0-.437.2-.188.2-.188.425v2.825q0 .225.188.413.187.187.437.187ZM4.85 5.125V9.175 5.125Zm0 9.7v4.05V14.825Z"/></svg>,
  bars: <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M3 18v-2h18v2Zm0-5v-2h18v2Zm0-5V6h18v2Z"/></svg>,
  add:<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
  <path d="M15 12H12M12 12H9M12 12V9M12 12V15M17 21H7C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21Z" stroke="#fff" stroke-width="2" stroke-linecap="round"/>
  </svg>,
  back:<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="none">
  <path d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.00002 15.3802H13.92C15.62 15.3802 17 14.0002 17 12.3002C17 10.6002 15.62 9.22021 13.92 9.22021H7.15002" stroke="#fff" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M8.57 10.7701L7 9.19012L8.57 7.62012" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>,
  logout:<svg xmlns="http://www.w3.org/2000/svg" width="800px" height="800px" viewBox="0 0 24 24" fill="none">
  <path d="M12.9999 2C10.2385 2 7.99991 4.23858 7.99991 7C7.99991 7.55228 8.44762 8 8.99991 8C9.55219 8 9.99991 7.55228 9.99991 7C9.99991 5.34315 11.3431 4 12.9999 4H16.9999C18.6568 4 19.9999 5.34315 19.9999 7V17C19.9999 18.6569 18.6568 20 16.9999 20H12.9999C11.3431 20 9.99991 18.6569 9.99991 17C9.99991 16.4477 9.55219 16 8.99991 16C8.44762 16 7.99991 16.4477 7.99991 17C7.99991 19.7614 10.2385 22 12.9999 22H16.9999C19.7613 22 21.9999 19.7614 21.9999 17V7C21.9999 4.23858 19.7613 2 16.9999 2H12.9999Z" fill="#000000"/>
  <path d="M13.9999 11C14.5522 11 14.9999 11.4477 14.9999 12C14.9999 12.5523 14.5522 13 13.9999 13V11Z" fill="#000000"/>
  <path d="M5.71783 11C5.80685 10.8902 5.89214 10.7837 5.97282 10.682C6.21831 10.3723 6.42615 10.1004 6.57291 9.90549C6.64636 9.80795 6.70468 9.72946 6.74495 9.67492L6.79152 9.61162L6.804 9.59454L6.80842 9.58848C6.80846 9.58842 6.80892 9.58778 5.99991 9L6.80842 9.58848C7.13304 9.14167 7.0345 8.51561 6.58769 8.19098C6.14091 7.86637 5.51558 7.9654 5.19094 8.41215L5.18812 8.41602L5.17788 8.43002L5.13612 8.48679C5.09918 8.53682 5.04456 8.61033 4.97516 8.7025C4.83623 8.88702 4.63874 9.14542 4.40567 9.43937C3.93443 10.0337 3.33759 10.7481 2.7928 11.2929L2.08569 12L2.7928 12.7071C3.33759 13.2519 3.93443 13.9663 4.40567 14.5606C4.63874 14.8546 4.83623 15.113 4.97516 15.2975C5.04456 15.3897 5.09918 15.4632 5.13612 15.5132L5.17788 15.57L5.18812 15.584L5.19045 15.5872C5.51509 16.0339 6.14091 16.1336 6.58769 15.809C7.0345 15.4844 7.13355 14.859 6.80892 14.4122L5.99991 15C6.80892 14.4122 6.80897 14.4123 6.80892 14.4122L6.804 14.4055L6.79152 14.3884L6.74495 14.3251C6.70468 14.2705 6.64636 14.1921 6.57291 14.0945C6.42615 13.8996 6.21831 13.6277 5.97282 13.318C5.89214 13.2163 5.80685 13.1098 5.71783 13H13.9999V11H5.71783Z" fill="#000000"/>
  </svg>,
  


}

function getSvg(icoName) {
  return svgIcons[icoName]
}

export const svgService = { getSvg }

// export const search=()=>{
// return 
//   `<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="m19.7 20.8-6.3-6.3q-.75.6-1.838.938-1.087.337-2.087.337-2.675 0-4.512-1.837Q3.125 12.1 3.125 9.45q0-2.65 1.838-4.487Q6.8 3.125 9.45 3.125q2.65 0 4.5 1.838Q15.8 6.8 15.8 9.45q0 1.075-.337 2.1-.338 1.025-.938 1.75l6.35 6.35ZM9.475 14.125q1.975 0 3.325-1.338 1.35-1.337 1.35-3.337T12.8 6.112q-1.35-1.337-3.325-1.337-2 0-3.35 1.337-1.35 1.338-1.35 3.338t1.35 3.337q1.35 1.338 3.35 1.338Z"/></svg>`,
// } 

// import React from 'react';
// import { svgService } from '../services/svg.service';

// const svgIcon = ({ iconName }) => {
//  const svg = svgService.getSvg(iconName);
//  return (
//   <i dangerouslySetInnerHTML={{ __html: svg }} ></i>
//  );
// }

// export default svgIcon;

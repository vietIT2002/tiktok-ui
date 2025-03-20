import classNames from 'classnames/bind';
import styles from './DefaultSidebar.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisH,
    faCoins,
    faMagic,
    faTools,
    faLanguage,
    faMoon,
    faCog,
    faQuestionCircle,
    faSignOutAlt,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Sidebar() {
    const [collapsed, setCollapsed] = useState(false);
    const [submenuOpen, setSubmenuOpen] = useState(false);
    const toggleSubMenu = () => {
      setCollapsed(!collapsed);
      setSubmenuOpen((prev) => !prev);
  };

    //     return (
    //         <aside className={cx('Sidebar')}>
    //             <div className={cx('logo')}>
    //                 <svg
    //                     xmlns="http://www.w3.org/2000/svg"
    //                     xmlnsXlink="http://www.w3.org/1999/xlink"
    //                     version="1.1"
    //                     id="Layer_1"
    //                     x="0px"
    //                     y="0px"
    //                     width="500px"
    //                     height="145.6895px"
    //                     viewBox="0 0 1000 291.379"
    //                     enableBackground="new 0 0 1000 291.379"
    //                     xmlSpace="preserve"
    //                 >
    //                     <path
    //                         fill="#FF004F"
    //                         d="M191.102,105.182c18.814,13.442,41.862,21.351,66.755,21.351V78.656c-4.711,0.001-9.41-0.49-14.019-1.466   v37.686c-24.891,0-47.936-7.909-66.755-21.35v97.703c0,48.876-39.642,88.495-88.54,88.495c-18.245,0-35.203-5.513-49.29-14.968   c16.078,16.431,38.5,26.624,63.306,26.624c48.901,0,88.545-39.619,88.545-88.497v-97.701H191.102z M208.396,56.88   c-9.615-10.499-15.928-24.067-17.294-39.067v-6.158h-13.285C181.161,30.72,192.567,47.008,208.396,56.88L208.396,56.88z    M70.181,227.25c-5.372-7.04-8.275-15.652-8.262-24.507c0-22.354,18.132-40.479,40.502-40.479   c4.169-0.001,8.313,0.637,12.286,1.897v-48.947c-4.643-0.636-9.329-0.906-14.013-0.807v38.098c-3.976-1.26-8.122-1.9-12.292-1.896   c-22.37,0-40.501,18.123-40.501,40.48C47.901,206.897,56.964,220.583,70.181,227.25z"
    //                     />
    //                     <path d="M177.083,93.525c18.819,13.441,41.864,21.35,66.755,21.35V77.189c-13.894-2.958-26.194-10.215-35.442-20.309   c-15.83-9.873-27.235-26.161-30.579-45.225h-34.896v191.226c-0.079,22.293-18.18,40.344-40.502,40.344   c-13.154,0-24.84-6.267-32.241-15.975c-13.216-6.667-22.279-20.354-22.279-36.16c0-22.355,18.131-40.48,40.501-40.48   c4.286,0,8.417,0.667,12.292,1.896v-38.098c-48.039,0.992-86.674,40.224-86.674,88.474c0,24.086,9.621,45.921,25.236,61.875   c14.087,9.454,31.045,14.968,49.29,14.968c48.899,0,88.54-39.621,88.54-88.496V93.525L177.083,93.525z" />
    //                     <path
    //                         fill="#00F2EA"
    //                         d="M243.838,77.189V66.999c-12.529,0.019-24.812-3.488-35.442-10.12   C217.806,67.176,230.197,74.276,243.838,77.189z M177.817,11.655c-0.319-1.822-0.564-3.656-0.734-5.497V0h-48.182v191.228   c-0.077,22.29-18.177,40.341-40.501,40.341c-6.554,0-12.742-1.555-18.222-4.318c7.401,9.707,19.087,15.973,32.241,15.973   c22.32,0,40.424-18.049,40.502-40.342V11.655H177.817z M100.694,114.408V103.56c-4.026-0.55-8.085-0.826-12.149-0.824   C39.642,102.735,0,142.356,0,191.228c0,30.64,15.58,57.643,39.255,73.527c-15.615-15.953-25.236-37.789-25.236-61.874   C14.019,154.632,52.653,115.4,100.694,114.408z"
    //                     />
    //                     <path
    //                         fill="#FF004F"
    //                         d="M802.126,239.659c34.989,0,63.354-28.136,63.354-62.84c0-34.703-28.365-62.844-63.354-62.844h-9.545   c34.99,0,63.355,28.14,63.355,62.844s-28.365,62.84-63.355,62.84H802.126z"
    //                     />
    //                     <path
    //                         fill="#00F2EA"
    //                         d="M791.716,113.975h-9.544c-34.988,0-63.358,28.14-63.358,62.844s28.37,62.84,63.358,62.84h9.544   c-34.993,0-63.358-28.136-63.358-62.84C728.357,142.116,756.723,113.975,791.716,113.975z"
    //                     />
    //                     <path d="M310.062,85.572v31.853h37.311v121.374h37.326V118.285h30.372l10.414-32.712H310.062z M615.544,85.572v31.853h37.311   v121.374h37.326V118.285h30.371l10.413-32.712H615.544z M432.434,103.648c0-9.981,8.146-18.076,18.21-18.076   c10.073,0,18.228,8.095,18.228,18.076c0,9.982-8.15,18.077-18.228,18.077C440.58,121.72,432.434,113.63,432.434,103.648z    M432.434,134.641h36.438v104.158h-36.438V134.641z M484.496,85.572v153.226h36.452v-39.594l11.283-10.339l35.577,50.793h39.05   l-51.207-74.03l45.997-44.768h-44.258l-36.442,36.153V85.572H484.496z M877.623,85.572v153.226h36.457v-39.594l11.278-10.339   l35.587,50.793H1000l-51.207-74.03l45.995-44.768h-44.256l-36.452,36.153V85.572H877.623z" />
    //                     <path d="M792.578,239.659c34.988,0,63.358-28.136,63.358-62.84c0-34.703-28.37-62.844-63.358-62.844h-0.865   c-34.99,0-63.355,28.14-63.355,62.844s28.365,62.84,63.355,62.84H792.578z M761.336,176.819c0-16.881,13.8-30.555,30.817-30.555   c17.005,0,30.804,13.674,30.804,30.555s-13.799,30.563-30.804,30.563C775.136,207.379,761.336,193.7,761.336,176.819z" />
    //                 </svg>
    //             </div>
    //             <div className={cx('search')}>
    //                 <button className="search-btn">
    //                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" style={{ width: '20px', height: '20px'}}>
    //                         <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    //                     </svg>
    //                 </button>
    //                 <input placeholder="Tìm Kiếm" />
    //             </div>

    //             <div className={cx('Main-Sidebar-Navigation')}>
    //                 <div className={cx('Sidebar-Navigation')}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    //                         </svg>
    //                     </div>

    //                     <div className={cx('Text-Navigation')}>
    //                         <p>Đề xuất</p>
    //                     </div>
    //                 </div>

    //                 <div className={cx('Sidebar-Navigation')}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z"></path>
    //                             <path d="M27.13 27.18 19 32.1a.6.6 0 0 1-.9-.63l1.84-9.33a2 2 0 0 1 .92-1.32L29 15.9a.6.6 0 0 1 .9.63l-1.84 9.33a2 2 0 0 1-.93 1.32Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z"></path>
    //                         </svg>
    //                     </div>

    //                     <div className={cx('Text-Navigation')}>
    //                         <p>Khám phá</p>
    //                     </div>
    //                 </div>

    //                 <div className={cx('Sidebar-Navigation')}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em">
    //                             <path d="M18.99 3a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.00A6 6 0 0 0 19 7ZM18.99 26c2.96 0 5.6.58 7.87 1.65l-3.07 3.06a15.38 15.38 0 0 0-4.8-.71C10.9 30 6.3 35.16 6 43c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1C2.33 32.99 8.7 26 19 26ZM35.7 41.88 31.82 38H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.82l3.88-3.88a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.42 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41Z"></path>
    //                         </svg>
    //                     </div>

    //                     <div className={cx('Text-Navigation')}>
    //                         <p>Đã follow</p>
    //                     </div>
    //                 </div>

    //                 <div className={cx('Sidebar-Navigation')}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M25 15a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6v-6a1 1 0 0 1 1-1h2Z"></path>
    //                             <path d="M33.58 4.5H14.42c-1.33 0-2.45 0-3.37.07-.95.08-1.86.25-2.73.7a7 7 0 0 0-3.06 3.05 7.14 7.14 0 0 0-.69 2.73 44.6 44.6 0 0 0-.07 3.37v19.16c0 1.33 0 2.45.07 3.37.08.95.25 1.86.7 2.73a7 7 0 0 0 3.05 3.06c.87.44 1.78.6 2.73.69.92.07 2.04.07 3.37.07h19.16c1.33 0 2.45 0 3.37-.07a7.14 7.14 0 0 0 2.73-.7 7 7 0 0 0 3.06-3.05c.44-.87.6-1.78.69-2.73.07-.92.07-2.04.07-3.37V14.42c0-1.33 0-2.45-.07-3.37a7.14 7.14 0 0 0-.7-2.73 7 7 0 0 0-3.05-3.06 7.14 7.14 0 0 0-2.73-.69 44.6 44.6 0 0 0-3.37-.07ZM10.14 8.83c.2-.1.53-.21 1.24-.27.73-.06 1.69-.06 3.12-.06h19c1.43 0 2.39 0 3.12.06a3.3 3.3 0 0 1 1.24.27 3 3 0 0 1 1.31 1.3c.1.21.21.54.27 1.25.06.73.06 1.69.06 3.12v19c0 1.43 0 2.39-.06 3.12a3.3 3.3 0 0 1-.27 1.24 3 3 0 0 1-1.3 1.31c-.21.1-.54.21-1.25.27-.73.06-1.69.06-3.12.06h-19c-1.43 0-2.39 0-3.12-.06a3.3 3.3 0 0 1-1.24-.27 3 3 0 0 1-1.31-1.3c-.1-.21-.21-.54-.27-1.25-.06-.73-.06-1.69-.06-3.12v-19c0-1.43 0-2.39.06-3.12a3.3 3.3 0 0 1 .27-1.24 3 3 0 0 1 1.3-1.31Z"></path>
    //                         </svg>
    //                     </div>

    //                     <div className={cx('Text-Navigation')}>
    //                         <p>Tải lên</p>
    //                     </div>
    //                 </div>

    //                 <div className={cx('Sidebar-Navigation')}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg fill="currentColor" class="css-dr8s99-StyledLiveIcon egn9vfa4" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    //                             <path d="M16.78 26.82c-.08.18-.08.41-.08.88v3.9c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-3.9c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54ZM22.5 21.4c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08.47 0 .7 0 .88.08.25.1.44.3.54.54.08.18.08.41.08.88v10.2c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54c-.08-.18-.08-.41-.08-.88V21.4ZM28.38 24.32c-.08.18-.08.41-.08.88v6.4c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-6.4c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54Z"></path>
    //                             <path d="M16.57 7.49a1 1 0 0 0-.13 1.4l3.62 4.31H15.7c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.18 2.18C7.7 17 7.7 18.4 7.7 21.2v10.7c0 2.8 0 4.2.55 5.27a5 5 0 0 0 2.18 2.19c1.07.54 2.47.54 5.27.54h16.6c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19c.54-1.07.54-2.47.54-5.27V21.2c0-2.8 0-4.2-.54-5.27a5 5 0 0 0-2.19-2.18c-1.07-.55-2.47-.55-5.27-.55h-4.42l3.61-4.3a1 1 0 0 0-.12-1.41l-.77-.65a1 1 0 0 0-1.4.13l-5.23 6.22-5.23-6.22a1 1 0 0 0-1.4-.13l-.77.65Zm-.87 8.71h16.6c1.45 0 2.36 0 3.04.06.65.05.83.14.87.16.37.19.68.5.87.87.02.04.1.22.16.87.06.68.06 1.6.06 3.04v10.7c0 1.45 0 2.36-.06 3.04-.05.65-.14.83-.16.87a2 2 0 0 1-.87.87c-.04.02-.22.1-.87.16-.68.06-1.59.06-3.04.06H15.7c-1.45 0-2.36 0-3.04-.06a2.47 2.47 0 0 1-.87-.16 2 2 0 0 1-.87-.87c-.02-.04-.1-.22-.16-.87-.06-.68-.06-1.59-.06-3.04V21.2c0-1.45 0-2.36.06-3.04.05-.65.14-.83.16-.87a2 2 0 0 1 .87-.87c.04-.02.22-.1.87-.16a42.2 42.2 0 0 1 3.04-.06Z"></path>
    //                         </svg>
    //                     </div>

    //                     <div className={cx('Text-Navigation')}>
    //                         <p>LIVE</p>
    //                     </div>
    //                 </div>

    //                 <div className={cx('Sidebar-Navigation')}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    //                         </svg>
    //                     </div>

    //                     <div className={cx('Text-Navigation')}>
    //                         <p>Hồ Sơ</p>
    //                     </div>
    //                 </div>

    //                 <div className={cx('Sidebar-Navigation')} onClick={toggleSubMenu}>
    //                     <div className={cx('Icon-Navigation')}>
    //                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
    //                             <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    //                         </svg>
    //                     </div>
    //                         <div className={cx('Text-Navigation')}>
    //                             <p>Thêm</p>
    //                         </div>
    //                 </div>
    //                   {submenuOpen && (
    //                     <div className={cx("submenu")} style={{ left: collapsed ? "80px" : "250px" }}>
    //                        <ul>
    //       <li>Nhận Xu</li>
    //       <li>Tạo hiệu ứng TikTok</li>
    //       <li>Công cụ dành cho nhà sáng tạo</li>
    //       <li>Tiếng Việt</li>
    //       <li>Chế độ tối</li>
    //       <li>Cài đặt</li>
    //       <li>Phản hồi và trợ giúp</li>
    //       <li>Đăng xuất</li>
    //     </ul>
    //   </div>
    //                  )}
    //                 </div>
    //         </aside>
    //     );
    // }

    // export default Sidebar;

    return (
        <div className={cx('menu-container')}>
            <div className={cx('menu', { collapsed: collapsed })}>
                <ul>
                    <span className={cx('add-text')}>LAMPART</span>
                    <li className={cx('no-hover')}>
                        <div className={cx('search')}>
                            <button className="search-btn">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                    style={{ width: '20px', height: '20px' }}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                                    />
                                </svg>
                            </button>
                            {!collapsed && <input placeholder="Search" />}
                        </div>
                    </li>
                    <li>
                        {/* Home */}
                        <div className={cx('Icon')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                                />
                            </svg>
                        </div>
                        {/* <span className={cx('Text-Navigation')}>Giới Thiệu</span> */}
                        <span className={cx('Text-Navigation')}>Introduce</span>
                    </li>

                    {/* propose */}
                    <li>
                        <div className={cx('Icon')}>
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M24 37.4a13.4 13.4 0 1 0 0-26.8 13.4 13.4 0 0 0 0 26.8ZM40.5 24a16.5 16.5 0 1 1-33 0 16.5 16.5 0 0 1 33 0Z"></path>
                                <path d="M27.13 27.18 19 32.1a.6.6 0 0 1-.9-.63l1.84-9.33a2 2 0 0 1 .92-1.32L29 15.9a.6.6 0 0 1 .9.63l-1.84 9.33a2 2 0 0 1-.93 1.32Zm-5.04-.45 3.11-1.89.7-3.57-3.1 1.89-.7 3.57Z"></path>
                            </svg>
                        </div>
                        {/* <span className={cx('Text-Navigation')}>Khám phá</span> */}
                        <span className={cx('Text-Navigation')}>Discover</span>
                    </li>

                    {/* Follow */}
                    <li>
                        <div className={cx('Icon')}>
                            <svg
                                fill="currentColor"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                                width="1em"
                                height="1em"
                            >
                                <path d="M18.99 3a10 10 0 1 1 0 20 10 10 0 0 1 0-20Zm0 4a6 6 0 1 0 0 12.00A6 6 0 0 0 19 7ZM18.99 26c2.96 0 5.6.58 7.87 1.65l-3.07 3.06a15.38 15.38 0 0 0-4.8-.71C10.9 30 6.3 35.16 6 43c-.02.55-.46 1-1.02 1h-2c-.55 0-1-.45-.98-1C2.33 32.99 8.7 26 19 26ZM35.7 41.88 31.82 38H45a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H31.82l3.88-3.88a1 1 0 0 0 0-1.41l-1.41-1.42a1 1 0 0 0-1.42 0l-7.3 7.3a2 2 0 0 0 0 2.82l7.3 7.3a1 1 0 0 0 1.42 0l1.41-1.42a1 1 0 0 0 0-1.41Z"></path>
                            </svg>
                        </div>
                        {/* <span className={cx('Text-Navigation')}>Đã Follow</span> */}
                        <span className={cx('Text-Navigation')}>Potential Customers</span>
                    </li>

                    {/* Upload */}
                    <li>
                        <div className={cx('Icon')}>
                            <svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 15a1 1 0 0 1 1 1v6h6a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-6h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h6v-6a1 1 0 0 1 1-1h2Z"></path>
                                <path d="M33.58 4.5H14.42c-1.33 0-2.45 0-3.37.07-.95.08-1.86.25-2.73.7a7 7 0 0 0-3.06 3.05 7.14 7.14 0 0 0-.69 2.73 44.6 44.6 0 0 0-.07 3.37v19.16c0 1.33 0 2.45.07 3.37.08.95.25 1.86.7 2.73a7 7 0 0 0 3.05 3.06c.87.44 1.78.6 2.73.69.92.07 2.04.07 3.37.07h19.16c1.33 0 2.45 0 3.37-.07a7.14 7.14 0 0 0 2.73-.7 7 7 0 0 0 3.06-3.05c.44-.87.6-1.78.69-2.73.07-.92.07-2.04.07-3.37V14.42c0-1.33 0-2.45-.07-3.37a7.14 7.14 0 0 0-.7-2.73 7 7 0 0 0-3.05-3.06 7.14 7.14 0 0 0-2.73-.69 44.6 44.6 0 0 0-3.37-.07ZM10.14 8.83c.2-.1.53-.21 1.24-.27.73-.06 1.69-.06 3.12-.06h19c1.43 0 2.39 0 3.12.06a3.3 3.3 0 0 1 1.24.27 3 3 0 0 1 1.31 1.3c.1.21.21.54.27 1.25.06.73.06 1.69.06 3.12v19c0 1.43 0 2.39-.06 3.12a3.3 3.3 0 0 1-.27 1.24 3 3 0 0 1-1.3 1.31c-.21.1-.54.21-1.25.27-.73.06-1.69.06-3.12.06h-19c-1.43 0-2.39 0-3.12-.06a3.3 3.3 0 0 1-1.24-.27 3 3 0 0 1-1.31-1.3c-.1-.21-.21-.54-.27-1.25-.06-.73-.06-1.69-.06-3.12v-19c0-1.43 0-2.39.06-3.12a3.3 3.3 0 0 1 .27-1.24 3 3 0 0 1 1.3-1.31Z"></path>
                            </svg>
                        </div>
                        <span className={cx('Text-Navigation')}>Register</span>
                    </li>

                    {/* Live */}
                    <li>
                        <div className={cx('Icon')}>
                            <svg
                                fill="currentColor"
                                class="css-dr8s99-StyledLiveIcon egn9vfa4"
                                viewBox="0 0 48 48"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M16.78 26.82c-.08.18-.08.41-.08.88v3.9c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-3.9c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54ZM22.5 21.4c0-.47 0-.7.08-.88a1 1 0 0 1 .54-.54c.18-.08.41-.08.88-.08.47 0 .7 0 .88.08.25.1.44.3.54.54.08.18.08.41.08.88v10.2c0 .47 0 .7-.08.88a1 1 0 0 1-.54.54c-.18.08-.41.08-.88.08-.47 0-.7 0-.88-.08a1 1 0 0 1-.54-.54c-.08-.18-.08-.41-.08-.88V21.4ZM28.38 24.32c-.08.18-.08.41-.08.88v6.4c0 .47 0 .7.08.88.1.25.3.44.54.54.18.08.41.08.88.08.47 0 .7 0 .88-.08a1 1 0 0 0 .54-.54c.08-.18.08-.41.08-.88v-6.4c0-.47 0-.7-.08-.88a1 1 0 0 0-.54-.54c-.18-.08-.41-.08-.88-.08-.47 0-.7 0-.88.08a1 1 0 0 0-.54.54Z"></path>
                                <path d="M16.57 7.49a1 1 0 0 0-.13 1.4l3.62 4.31H15.7c-2.8 0-4.2 0-5.27.55a5 5 0 0 0-2.18 2.18C7.7 17 7.7 18.4 7.7 21.2v10.7c0 2.8 0 4.2.55 5.27a5 5 0 0 0 2.18 2.19c1.07.54 2.47.54 5.27.54h16.6c2.8 0 4.2 0 5.27-.54a5 5 0 0 0 2.19-2.19c.54-1.07.54-2.47.54-5.27V21.2c0-2.8 0-4.2-.54-5.27a5 5 0 0 0-2.19-2.18c-1.07-.55-2.47-.55-5.27-.55h-4.42l3.61-4.3a1 1 0 0 0-.12-1.41l-.77-.65a1 1 0 0 0-1.4.13l-5.23 6.22-5.23-6.22a1 1 0 0 0-1.4-.13l-.77.65Zm-.87 8.71h16.6c1.45 0 2.36 0 3.04.06.65.05.83.14.87.16.37.19.68.5.87.87.02.04.1.22.16.87.06.68.06 1.6.06 3.04v10.7c0 1.45 0 2.36-.06 3.04-.05.65-.14.83-.16.87a2 2 0 0 1-.87.87c-.04.02-.22.1-.87.16-.68.06-1.59.06-3.04.06H15.7c-1.45 0-2.36 0-3.04-.06a2.47 2.47 0 0 1-.87-.16 2 2 0 0 1-.87-.87c-.02-.04-.1-.22-.16-.87-.06-.68-.06-1.59-.06-3.04V21.2c0-1.45 0-2.36.06-3.04.05-.65.14-.83.16-.87a2 2 0 0 1 .87-.87c.04-.02.22-.1.87-.16a42.2 42.2 0 0 1 3.04-.06Z"></path>
                            </svg>
                        </div>
                        {/* <span className={cx('Text-Navigation')}>LIVE</span> */}
                        <span className={cx('Text-Navigation')}>Broadcast</span>
                    </li>

                    {/* File */}
                    <li>
                        <div className={cx('Icon')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </div>
                        <span className={cx('Text-Navigation')}>Personal Profile</span>
                    </li>

                    <li onClick={toggleSubMenu}>
                        <div className={cx('Icon')}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                                />
                            </svg>
                        </div>
                        <span className={cx('Text-Navigation')}>See more</span>
                    </li>
                </ul>
            </div>
            {submenuOpen && (
                <div className={cx('submenu', submenuOpen ? 'show' : '')} style={{ left: collapsed ? '80px' : '250px' }}>
                    <ul>
                        <div className={cx('add-item')}>
                            <span className={cx('add-text')}>More</span>
                            <button className={cx('close-btn')} onClick={toggleSubMenu}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="size-6"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <li>Contact</li>
                        <li>
                            Security information
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                class="size-6"
                                width="16"
                                height="16"
                                style={{ marginLeft: 'auto', stroke: '#aaa' }}
                            >
                                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li>
                            Language
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                                width="16"
                                height="16"
                                style={{ marginLeft: 'auto', stroke: '#aaa' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li>
                            Dark mode
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="size-6"
                                width="16"
                                height="16"
                                style={{ marginLeft: 'auto', stroke: '#aaa' }}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                            </svg>
                        </li>
                        <li>Feedback and help</li>
                    </ul>
                </div>
            )}
        </div>
    );
}

export default Sidebar;

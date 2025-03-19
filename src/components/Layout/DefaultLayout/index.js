import classNames from 'classnames/bind';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

const cx = classNames.bind(styles);


function DefaultLayout({ children }) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('sidebar')}>
        <Sidebar />
      </div>
      <div className={cx("content")}>
        {children}
      </div>
    </div>
  );
}

export default DefaultLayout;

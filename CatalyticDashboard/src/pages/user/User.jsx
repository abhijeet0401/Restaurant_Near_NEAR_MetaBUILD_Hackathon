import React from "react";
import "./user.css";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import LocationSearchingIcon from "@material-ui/icons/LocationSearching";
import PublishIcon from "@material-ui/icons/Publish";

function User() {
  return (
    <div className='user'>
      <div className='userTitleContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <button className='userAddButton'>Create</button>
      </div>
      <div className='userContainer'>
        <div className='userShow'>
          <div className='userShowTop'>
            <div className='userShowImage'>
              <img
                src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                alt='Avatar'
                className='userShowImage'
              />
            </div>
            <div className='userShowTopTitle'>
              <span className='UserShowUserName'>Hasitha Rathnayake</span>
              <span className='UserShowUserTitle'>Quantity Surveyor</span>
            </div>
          </div>
          <div className='userShowBottom'>
            <span className='userShowBottomTitle'>Account Details</span>
            <div className='userShowInfo'>
              <PermIdentityIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>hasi99</span>
            </div>
            <div className='userShowInfo'>
              <CalendarTodayIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>1989.12.03</span>
            </div>

            <span className='userShowBottomTitle'>Contact Details</span>
            <div className='userShowInfo'>
              <PhoneAndroidIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>+94 71 6521 436</span>
            </div>
            <div className='userShowInfo'>
              <MailOutlineIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>Keerthi.mac@gmail.com</span>
            </div>
            <div className='userShowInfo'>
              <LocationSearchingIcon className='userShowIcon' />
              <span className='userShowInfoTitle'>Sri Lanka | Kandy</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateFrom'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='annabeck99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Anna Becker'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Email</label>
                <input
                  type='text'
                  placeholder='annabeck99@gmail.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+1 123 456 67'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='New York | USA'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  className='userUpdateImg'
                  src='https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500'
                  alt=''
                />
                <label htmlFor='file'>
                  <PublishIcon className='userUpdateIcon' />
                </label>
                <input type='file' id='file' style={{ display: "none" }} />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default User;

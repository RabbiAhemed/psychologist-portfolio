import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-left">
        <div id="contact-us-c">
          <p>Contact Us</p>
        </div>
        <div id="contact-details-c">
          <div className="infos-c my-4">
            <img src="https://i.ibb.co/r7xWGq5/call.png" alt="" />
            <p className="contact-info-c">
              Anchal Tower, Sixmile,
              <br />
              Guwahati, Assam 781022, India
            </p>
          </div>
          <div className="infos-c my-4">
            <img src="https://i.ibb.co/bHs3MB6/location.png" alt="" />
            <p className="contact-info-c" id="phone-num">
              +918333552221
            </p>
          </div>
          <div className="infos-c my-4">
            <img src="https://i.ibb.co/3vs37VD/Group-3.png" alt="" />
            <p className="contact-info-c">sayestagoswami.pt@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="contact-right">
        {/* <form>
          <div>
            <label htmlFor="first-name">Name</label>
            <br />
            <input type="text" name="" id="first-name" className="mx-2" />
            <input type="text" name="" id="last-name" className="mx-2" />
          </div>
          <input type="email" name="" id="" />
          <br />
          <textarea name="" id="" cols="40" rows="5"></textarea>
        </form> */}
        <form>
          <ul className="form-style-1 text-white">
            <li>
              <label className="label text-black">
                Name <span className="required">*</span>
              </label>
              <input type="text" name="field1" className="field-divided me-1" />
              <input type="text" name="field2" className="field-divided " />
            </li>
            <li className="mt-5">
              <label className="label">
                Email <span className="required">*</span>
              </label>
              <input type="email" name="field3" className="field-long" />
            </li>

            <li className="mt-5">
              <label className="label">
                Message <span className="required">*</span>
              </label>
              <textarea
                name="field5"
                id="field5"
                className="field-long field-textarea"
              ></textarea>
            </li>
            <li>
              <input type="submit" value="Send" id="submit-btn" />
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Contact;

import "../AddressData/AddressData.css";
export const EditAddress = ({
  onChangeHandler,
  setShowEdit,
  dummyAddress,
  updateHandler,
  setBlur
}) => {
  const { address, city, mobile, name, pincode, state } = dummyAddress;
  return (
    <div className="modal-container">
      <form className="form-container">
        <div>
          <h3>Edit Address</h3>
          <div className="input-group">
            <label className="form-label" htmlFor="">
              Name
            </label>
            <input
              name="name"
              onChange={onChangeHandler}
              type="text"
              value={name}
              className="form-control"
              placeholder="Name"
            />
          </div>
          <div className="input-group">
            <label className="form-label" htmlFor="">
              Mobile Number
            </label>
            <input
              name="mobile"
              value={mobile}
              onChange={onChangeHandler}
              className="form-control"
              type="text"
              placeholder="10-digit mobile number"
            />
          </div>
          <div className="input-group">
            <label className="form-label" htmlFor="">
              Pincode
            </label>
            <input
              name="pincode"
              value={pincode}
              onChange={onChangeHandler}
              className="form-control"
              type="text"
              placeholder="Pincode"
            />
          </div>
          <div className="input-group">
            <label className="form-label" htmlFor="">
              Address
            </label>
            <input
              name="address"
              value={address}
              onChange={onChangeHandler}
              className="form-control"
              type="text"
              placeholder="Address"
            />
          </div>
          <div className="input-group">
            <label className="form-label" htmlFor="">
              City/District/Town
            </label>
            <input
              name="city"
              value={city}
              onChange={onChangeHandler}
              className="form-control"
              type="text"
              placeholder="City/District/Town"
            />
          </div>
          <div className="input-group">
            <label className="form-label" htmlFor="">
              State
            </label>
            <select
              onChange={onChangeHandler}
              name="state"
              value={state}
              className="form-control"
            >
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Panjab">Panjab</option>
              <option value="Gujrat">Gujrat</option>
              <option value="Goa">Goa</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Delhi">Delhi</option>
              <option value="Kerala">Kerala</option>
              <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Ladakh">Ladakh</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
            </select>
          </div>
          <div className="btn-container">
            <button className="btn btn-primary" onClick={updateHandler}>
              Update
            </button>
            <button
              onClick={() => {
                setShowEdit(false)
                setBlur("blur(0px)")
            }}
              className="btn btn-secondary"
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

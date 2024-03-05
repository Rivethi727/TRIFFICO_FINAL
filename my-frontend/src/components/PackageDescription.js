



// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import { useParams } from 'react-router-dom';

// const PlantDetails = () => {
//   const [packageData, setPackageData] = useState(null);
//   const { id } = useParams();
//   useEffect(() => {
//     fetchPackageDetails(id);
//   }, [id]);
//   const fetchPackageDetails = async (packageId) => {
//     try {
//       const response = await fetch(`http://localhost:4700/api/packages/${packageId}`);
//       if (!response.ok) {
//         throw new Error('Failed to fetch package details');
//       }
//       const data = await response.json();
//       setPackageData(data);
//     } catch (error) {
//       console.error('Error fetching package details:', error);
//     }
//   };
//   return (
//     <>
      
//       <div className="container my-5 py-5 plant-details-container">
//         {packageData ? (
//           <div className="row align-items-center">
//             <div className="col-md-6">
//               <img src={packageData.images[0]} alt={packageData.name} className="img-fluid" />
//             </div>
//             <div className="col-md-6">
//               <div className="plant-details-box">
//                 <h2>{packageData.name}</h2>
//                 <p>Description: {packageData.description}</p>
//                 <p>Duration: {packageData.duration} days</p>
//                 <p>Departure Date: {packageData.departureDate}</p>
//                 <p>Mode of Travel: {packageData.modeOfTravel}</p>
//                 <p>Departure City: {packageData.departureCity}</p>
//                 <p>Cost: ${packageData.cost}</p>
//                 <p>Inclusions: {packageData.inclusion.join(', ')}</p>
//                 <p>Exclusions: {packageData.exclusion.join(', ')}</p>
//                 <Link to="/services" className="btn btn-primary">Back to Services</Link>



                
//               </div>
//             </div>
//           </div>
//         ) : (
//           <p>Loading...</p>
//         )}
//       </div>
 
   
//     </>
//   );
// };
// export default PlantDetails;



import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import myImage3 from '../assets/images/destination-2.jpg';

const PackageDescription = () => {
  const [packageData, setPackageData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchPackageDetails(id);
  }, [id]);

  const fetchPackageDetails = async (packageId) => {
    try {
      const response = await fetch(`http://localhost:4700/api/packages/${packageId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch package details');
      }
      const data = await response.json();
      setPackageData(data);
    } catch (error) {
      console.error('Error fetching package details:', error);
    }
  };

  const [specificationContent, setSpecificationContent] = useState('Specification content');
  const [warrantyInfoContent, setWarrantyInfoContent] = useState('Warranty info content');
  const [shippingInfoContent, setShippingInfoContent] = useState('Shipping info content');
  const [sellerProfileContent, setSellerProfileContent] = useState('Seller profile content');

  const renderSimilarItem = (itemName, itemPrice) => (
    <div className="d-flex mb-3">
      <a href="#" className="me-3">
        <img src={myImage3} style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" alt={itemName} />
      </a>
      <div className="info" style={{ fontSize: '1.9rem' }}>
        <a href="#" className="nav-link mb-1">
          {itemName}
        </a>
        <strong className="text-dark"> {itemPrice}</strong>
      </div>
    </div>
  );

  const renderPillNavItem = (label, tabId, isActive = false, onClickHandler) => (
    <li className="nav-item d-flex" role="presentation">
      <a
        className={`nav-link d-flex align-items-center justify-content-center w-100 ${isActive ? 'active' : ''}`}
        id={`ex1-tab-${tabId}`}
        data-mdb-toggle="pill"
        href={`#ex1-${tabId}`}
        role="tab"
        aria-controls={`ex1-${tabId}`}
        aria-selected={isActive}
        style={{ fontSize: '1.9rem' }}
        onClick={onClickHandler}
      >
        {label}
      </a>
    </li>
  );

  const renderPillContent = (tabId, content) => (
    <div className={`tab-pane fade ${tabId === 'ex1-pills-1' ? 'show active' : ''}`} id={`ex1-${tabId}`} role="tabpanel" aria-labelledby={`ex1-tab-${tabId}`}>
      <p style={{ fontSize: '1.9rem' }}>{content}</p>
    </div>
  );

  return (
    <div className="container my-5 py-5 plant-details-container">
      {packageData ? (
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src={packageData.images[0]} alt={packageData.name} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <div className="plant-details-box" style={{ fontSize: '1.9rem' }} >
              <h2>{packageData.name}</h2>
              <p>Description: {packageData.description}</p>
              {/* <p>Duration: {packageData.duration} days</p> */}
              <p>Departure City: {packageData.departureCity}</p>
              {/* <p>Cost: ${packageData.cost}</p> */}
              <p>Inclusions: {packageData.inclusion.join(', ')}</p>
              <p>Exclusions: {packageData.exclusion.join(', ')}</p>
            </div>
          </div>

          <section className="bg-light border-top py-4">
            <div className="container">
              <div className="row gx-4">
                <div className="col-lg-8 mb-4">
                  <div className="border rounded-2 px-3 py-2 bg-white">
                    
                    {/* <!-- Start Card --> */}
  <div className="card">
    <div className="card-body">
      {/* <!-- Start Form --> */}
      <form id="bookingForm" action="#" method="" className="needs-validation" novalidate autocomplete="off">
   
       
        <div className="form-row">
      
          <div className="form-group col-md-4">
            <label for="inputDate">Start Date</label>
            <input type="date" className="form-control" id="inputDate" name="date" required />
            <small className="form-text text-muted">Please choose date and time for meeting.</small>
          </div>
  
          <div className="form-group col-md-4">
            <label for="inputDate">End Date</label>
            <input type="date" className="form-control" id="inputDate" name="date" required />
            <small className="form-text text-muted">Please choose date and time for meeting.</small>
          </div>
      
        </div>
        <hr />

    
        <div className="form-group">
          <legend className="col-form-label pt-0">Accommodation</legend>
{/* 
 
              {/* SELECT HOTEL */}
<button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Select Accommodation
</button>

<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        </div>
        {/* <!-- End Check Room Type --> */}
        <hr />

 {/* <!-- Start Check Room Type --> */}
 <div className="form-group1">
          <legend className="col-form-label pt-0">Vehicle Rental</legend>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType1" name="roomType" value="type1" required />
            <label className="form-check-label" for="inlineRadioType1">Auto ( 3 peoples)</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType2" name="roomType" value="type2" required />
            <label className="form-check-label" for="inlineRadioType2">Car (4 peoples)</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType3" name="roomType" value="type3" required />
            <label className="form-check-label" for="inlineRadioType3">Van(12 peoples)</label>
          </div>
          <div className="form-check form-check-inline">
            <input type="radio" className="form-check-input" id="inlineRadioType4" name="roomType" value="type4" required />
            <label className="form-check-label" for="inlineRadioType4">Bicycle</label>
          </div>
   
 </div>
 <hr />

        {/* <!-- End Check Room Type --> */}
        <div className="form-group2">
          <legend className="col-form-label pt-0">Place to Visit</legend>
        
                               <Link to="/places" className="btn btn-primary" style={{
                '--bs-btn-padding-y': '.75rem',
                '--bs-btn-padding-x': '.75rem',
                '--bs-btn-font-size': '1.3rem',
              }}>
                Place to visit 
              </Link>
        </div>
        {/* <!-- End Check Room Type --> */}
        <hr />

        

        {/* <!-- Start Input Remark --> */}
        <div className="form-group">
          <label for="textAreaRemark">Notes</label>
          <textarea className="form-control" name="remark" id="textAreaRemark" rows="2" placeholder="Tell us you want more..."></textarea>
        </div>
        {/* <!-- End Input Remark --> */}

        {/* <!-- Start Submit Button --> */}
        <button className="btn btn-primary btn-block col-lg-2" type="submit">Submit</button>
        {/* <!-- End Submit Button --> */}
      </form>
    
    </div>
   
  </div>
 

                    
                    

                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="px-0 border rounded-2 shadow-0">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title" style={{ fontSize: '1.9rem' }}>
                          Total Charges
                        </h5>
                        <table className="table">
              <tr>
                <td>Hotel</td>
                <td className="price">499.00 USD</td>
              </tr>
              <tr>
                <td>Mode of Travel</td>
                <td className="price">0.00 USD</td>
              </tr>
              <tr>
                <td>Service Charges</td>
                <td className="price">499.00 USD</td>
              </tr>
              <tr className="total">
                <td>Total</td>
                <td className="price">546.41 USD</td>
              </tr>
            </table>
            <button className="btn">
              <i className="fa-solid fa-lock"></i> Book Securely
            </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default PackageDescription;





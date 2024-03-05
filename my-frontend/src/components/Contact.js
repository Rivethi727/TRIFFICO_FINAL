




import React from 'react';
import myImage from '../assets/images/destination-1.jpg'
import myImage2 from '../assets/images/destination-4.jpg'
import myImage3 from '../assets/images/destination-2.jpg'
import myImage4 from '../assets/images/destination-3.jpg'
const PackageDescription = () => {
  return (
    <>
    <section className="py-5">
      <div className="container">
        <div className="row gx-5">
          <aside className="col-lg-6">
            <div className="border rounded-4 mb-3 d-flex justify-content-center">
              <a
                data-fslightbox="mygalley"
                className="rounded-4"
                target="_blank"
                data-type="image"
                href={myImage}
              >
                <img
                  style={{ maxWidth: '1000px', maxHeight: '1100px' }}
                  className="rounded-4 fit"
                  src={myImage2}
                  alt="Gallery Image"
                />
              </a>
            </div>
            <div className="d-flex justify-content-center mb-3">
              <a
                data-fslightbox="mygalley"
                className="border mx-1 rounded-2"
                target="_blank"
                data-type="image"
                href={myImage3}
              >
                
              </a>
            </div>
          </aside>
          <main className="col-lg-6">
            <div className="ps-lg-3">
              <h4 className="title text-dark">
                Quality Men's Hoodie for Winter, Men's Fashion <br />
                Casual Hoodie
              </h4>
              <div className="d-flex flex-row my-3">
                <div className="text-warning mb-1 me-2">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fas fa-star-half-alt"></i>
                  <span className="ms-1">4.5</span>
                </div>
                <span className="text-muted">
                  <i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders
                </span>
                <span className="text-success ms-2">In stock</span>
              </div>

              <div className="mb-3">
                <span className="h5">$75.00</span>
                <span className="text-muted">/per box</span>
              </div>

              <p>
                Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                men.
              </p>

              <div className="row">
                <dt className="col-3">Type:</dt>
                <dd className="col-9">Regular</dd>

                <dt className="col-3">Color</dt>
                <dd className="col-9">Brown</dd>

                <dt className="col-3">Material</dt>
                <dd className="col-9">Cotton, Jeans</dd>

                <dt className="col-3">Brand</dt>
                <dd className="col-9">Reebook</dd>
              </div>

              <hr />

              <div className="row mb-4">
                <div className="col-md-4 col-6">
                  <label className="mb-2">Size</label>
                  <select className="form-select border border-secondary" style={{ height: '35px' }}>
                    <option>Small</option>
                    <option>Medium</option>
                    <option>Large</option>
                  </select>
                </div>
                <div className="col-md-4 col-6 mb-3">
                  <label className="mb-2 d-block">Quantity</label>
                  <div className="input-group mb-3" style={{ width: '170px' }}>
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon1" data-mdb-ripple-color="dark">
                      <i className="fas fa-minus"></i>
                    </button>
                    <input
                      type="text"
                      className="form-control text-center border border-secondary"
                      placeholder="14"
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                    />
                    <button className="btn btn-white border border-secondary px-3" type="button" id="button-addon2" data-mdb-ripple-color="dark">
                      <i className="fas fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
              <a href="#" className="btn btn-warning shadow-0">
                Buy now
              </a>
              <a href="#" className="btn btn-primary shadow-0">
                <i className="me-1 fa fa-shopping-basket"></i> Add to cart
              </a>
              <a href="#" className="btn btn-light border border-secondary py-2 icon-hover px-3">
                <i className="me-1 fa fa-heart fa-lg"></i> Save
              </a>
            </div>
          </main>
        </div>
      </div>
    </section>
    <section className="bg-light border-top py-4">
    <div className="container">
      <div className="row gx-4">
        <div className="col-lg-8 mb-4">
        <div className="border rounded-2 px-3 py-2 bg-white">
              {/* Pills navs */}
              <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item d-flex" role="presentation">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100 active" id="ex1-tab-1" data-mdb-toggle="pill" href="#ex1-pills-1" role="tab" aria-controls="ex1-pills-1" aria-selected="true">Specification</a>
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-2" data-mdb-toggle="pill" href="#ex1-pills-2" role="tab" aria-controls="ex1-pills-2" aria-selected="false">Warranty info</a>
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-3" data-mdb-toggle="pill" href="#ex1-pills-3" role="tab" aria-controls="ex1-pills-3" aria-selected="false">Shipping info</a>
                </li>
                <li className="nav-item d-flex" role="presentation">
                  <a className="nav-link d-flex align-items-center justify-content-center w-100" id="ex1-tab-4" data-mdb-toggle="pill" href="#ex1-pills-4" role="tab" aria-controls="ex1-pills-4" aria-selected="false">Seller profile</a>
                </li>
              </ul>
              {/* Pills navs */}
  
              {/* Pills content */}
              <div className="tab-content" id="ex1-content">
                <div className="tab-pane fade show active" id="ex1-pills-1" role="tabpanel" aria-labelledby="ex1-tab-1">
                  <p>
                    With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                  <div className="row mb-2">
                    <div className="col-12 col-md-6">
                      <ul className="list-unstyled mb-0">
                        <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                        <li><i className="fas fa-check text-success me-2"></i>Lorem ipsum dolor sit amet, consectetur</li>
                        <li><i className="fas fa-check text-success me-2"></i>Duis aute irure dolor in reprehenderit</li>
                        <li><i className="fas fa-check text-success me-2"></i>Optical heart sensor</li>
                      </ul>
                    </div>
                    <div className="col-12 col-md-6 mb-0">
                      <ul className="list-unstyled">
                        <li><i className="fas fa-check text-success me-2"></i>Easy fast and very good</li>
                        <li><i className="fas fa-check text-success me-2"></i>Some great feature name here</li>
                        <li><i className="fas fa-check text-success me-2"></i>Modern style and design</li>
                      </ul>
                    </div>
                  </div>
                  <table className="table border mt-3 mb-2">
                    <tr>
                      <th className="py-2">Display:</th>
                      <td className="py-2">13.3-inch LED-backlit display with IPS</td>
                    </tr>
                    <tr>
                      <th className="py-2">Processor capacity:</th>
                      <td className="py-2">2.3GHz dual-core Intel Core i5</td>
                    </tr>
                    <tr>
                      <th className="py-2">Camera quality:</th>
                      <td className="py-2">720p FaceTime HD camera</td>
                    </tr>
                    <tr>
                      <th className="py-2">Memory</th>
                      <td className="py-2">8 GB RAM or 16 GB RAM</td>
                    </tr>
                    <tr>
                      <th className="py-2">Graphics</th>
                      <td className="py-2">Intel Iris Plus Graphics 640</td>
                    </tr>
                  </table>
                </div>
                {/*  */}
                {/*  */}
                {/*  */}
              </div>
              {/* Pills content */}
            </div>
          </div>

        </div>
        <div className="col-lg-4">
        <div className="px-0 border rounded-2 shadow-0">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Similar items</h5>
                  <div className="d-flex mb-3">
                    <a href="#" className="me-3">
                      <img src={myImage3} style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" alt="Similar Item 1" />
                    </a>
                    <div className="info">
                      <a href="#" className="nav-link mb-1">
                        Rucksack Backpack Large <br />
                        Line Mounts
                      </a>
                      <strong className="text-dark"> $38.90</strong>
                    </div>
                  </div>
  
                  <div className="d-flex mb-3">
                    <a href="#" className="me-3">
                      <img src={myImage} style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" alt="Similar Item 2" />
                    </a>
                    <div className="info">
                      <a href="#" className="nav-link mb-1">
                        Summer New Men's Denim <br />
                        Jeans Shorts
                      </a>
                      <strong className="text-dark"> $29.50</strong>
                    </div>
                  </div>
  
                  <div className="d-flex mb-3">
                    <a href="#" className="me-3">
                      <img src={myImage2} style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" alt="Similar Item 3" />
                    </a>
                    <div className="info">
                      <a href="#" className="nav-link mb-1"> T-shirts with multiple colors, for men and lady </a>
                      <strong className="text-dark"> $120.00</strong>
                    </div>
                  </div>
  
                  <div className="d-flex">
                    <a href="#" className="me-3">
                      <img src={myImage4} style={{ minWidth: '96px', height: '96px' }} className="img-md img-thumbnail" alt="Similar Item 4" />
                    </a>
                    <div className="info">
                      <a href="#" className="nav-link mb-1"> Blazer Suit Dress Jacket for Men, Blue color </a>
                      <strong className="text-dark"> $339.90</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
  </section>
</>
  );
};

export default PackageDescription;



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




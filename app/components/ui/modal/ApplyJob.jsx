import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Input } from '../input/input';
// import SingleImageUploader from '../uploader/imageUploader';

import Loader from '../status/Loader'
// import SuccessBadge from '../status/Successbadge';
import ErrorBadge from '../status/ErrorBadge';
import { useFetchVendors } from '../../../controllers/vendor';
import SuccessBadge from '../status/SuccessBadge';
import FileUploader from '../uploader/fileUploader';
//=============================================================================
const ApplyJob = ({ designation, description, isOpen, onClose, onSubmit }) => {
  //=============================================================================
  const { addCategory, isPending, error, isSuccess } = useFetchVendors();
  const modalRef = useRef();
  // 👇 Handle outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);


  const [imageFile, setImageFile] = useState(null); // Store the image file
  const [apiResponse, setApiResponse] = useState(''); // Success pop-up state



  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: '',
    description: '',
    icon: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const categoryData = new FormData();
    categoryData.append('name', formData.name);
    categoryData.append('description', formData.description);
    if (imageFile) {
      categoryData.append('icon', imageFile);
    }

    const { success, error: addCategoryError, successMessage } = await addCategory(categoryData);

    if (success) {
      setApiResponse(successMessage)
    } else {
      setApiResponse(addCategoryError)
      console.error('Error adding category:', addCategoryError);
    }
  };
  if (!isOpen) return null;
  //=============================================================================

  return (

    <>
      {/* //============================================================================= */}


      <div className="animate-slide-down  fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.6)] backdrop-blur-sm z-50">
        <div ref={modalRef}
          className="bg-background-section p-2 rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto transition-transform transform scale-100 border border-accent/60 border-4">
          <div className="bg-background p-6 rounded-md mb-6 flex flex-col">
            {/* <h3 className="text-xl font-bold mb-2 text-center text-primary-text-inverse">Applying For :</h3> */}
            <h3 className="text-xl font-bold mb-2  m-auto bg-accent-muted w-fit text-center p-2 rounded-md  text-accent">{designation}</h3>
            <p className="text-sm text-primary-text-inverse text-center">{description}</p>
          </div>
          {/* ======== FORM ======================================================================== */}
          <form onSubmit={handleSubmit} className="space-y-4 p-4">

            <div>
              <label className="block mb-2 text-sm font-medium text-primary-text">Name</label>
              <Input
                placeholder="Add small description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-primary-text">Email</label>
              <Input
                placeholder="Add small description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-primary-text">Phone</label>
              <Input
                placeholder="Add small description"
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-primary-text">Message</label>
              <Input
                type="textarea"
                placeholder="Add small description"

                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            {/* ================================================================================ */}

            <FileUploader setImageFile={setImageFile} />

            <div className="flex justify-end gap-4 mt-8">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-muted text-primary-text hover:bg-opacity-80 transition border border-[#d3c5c5]"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 rounded-lg bg-accent text-white font-semibold hover:scale-105 transition-transform"
              >
                {isPending ? <Loader /> : "Submit"}
              </button>
            </div>
            {/* {true && <SuccessBadge message={'successMessage'} />} */}
            {isSuccess && <SuccessBadge onClose={onClose} message={apiResponse} />}
            {error && <ErrorBadge message={apiResponse} />}
          </form>
        </div>
      </div>

    </>
  );
};

ApplyJob.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default ApplyJob;
import React, { useEffect, useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Range } from "react-range";
import "./FilterModal.css";

const FilterModal = ({ show, handleClose, title, type, options, selectedOptions, setSelectedOptions }) => {
  const [tempSelectedOptions, setTempSelectedOptions] = useState([]);

  useEffect(() => {
    if (show) {
      setTempSelectedOptions([...selectedOptions]);
    }
  }, [show, selectedOptions]);

  const handleApply = () => {
    setSelectedOptions(tempSelectedOptions);
    handleClose();
  };

  const handleClearAll = () => {
    const defaultValue = type === "range" ? [0, 30] : [];
    setTempSelectedOptions(defaultValue);
    setSelectedOptions(defaultValue);
  };

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="filter-modal" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title id="filter-modal">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {type === "checkbox" && (
            <div className="checkbox-grid">
              {options.map((option, index) => (
                <Form.Check
                  key={index}
                  type="checkbox"
                  label={option}
                  className="checkbox-item"
                  checked={tempSelectedOptions.includes(option)}
                  onChange={() =>
                    setTempSelectedOptions((prev) =>
                      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
                    )
                  }
                />
              ))}
            </div>
          )}

          {type === "range" && show && tempSelectedOptions.length === 2 && (
            <div className="range-slider">
              <Form.Label>
                Experience: {tempSelectedOptions[0]} - {tempSelectedOptions[1]} Years
              </Form.Label>
              <Range
                step={1}
                min={0}
                max={30}
                values={tempSelectedOptions}
                onChange={(values) => setTempSelectedOptions([...values])}
                renderTrack={({ props, children }) => (
                  <div {...props} className="track">
                    {children}
                  </div>
                )}
                renderThumb={({ props, index }) => (
                  <div {...props} className="thumb">{tempSelectedOptions[index]}</div>
                )}
              />
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClearAll}>
          Clear All
        </Button>
        <Button variant="primary" onClick={handleApply}>
          Apply
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default FilterModal;
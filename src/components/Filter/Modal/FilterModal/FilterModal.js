import React, { useEffect, useState, useCallback, memo } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { Range } from "react-range";
import "./FilterModal.css";

// Extracted checkbox component for better separation of concerns
const CheckboxGrid = memo(({ options, selectedOptions, onChange }) => (
  <div className="checkbox-grid">
    {options.map((option, index) => (
      <Form.Check
        key={index}
        type="checkbox"
        label={option}
        className="checkbox-item"
        checked={selectedOptions.includes(option)}
        onChange={() => onChange(option)}
      />
    ))}
  </div>
));

// Extracted range slider component
const RangeSlider = memo(({ values, onChange }) => (
  <div className="range-slider">
    <Form.Label>
      Experience: {values[0]} - {values[1]} Years
    </Form.Label>
    <Range
      step={1}
      min={0}
      max={30}
      values={values}
      onChange={(newValues) => onChange([...newValues])}
      renderTrack={({ props, children }) => (
        <div {...props} className="track">
          {children}
        </div>
      )}
      renderThumb={({ props, index }) => (
        <div {...props} className="thumb">{values[index]}</div>
      )}
    />
  </div>
));

const FilterModal = memo(({ 
  show = false, 
  handleClose, 
  title = "Filter", 
  type = "checkbox", 
  options = [], 
  selectedOptions = [], 
  setSelectedOptions 
}) => {
  // Initialize with empty array or default range values
  const defaultValue = type === "range" ? [0, 30] : [];
  const [tempSelectedOptions, setTempSelectedOptions] = useState(defaultValue);

  // Reset temp selections when modal opens
  useEffect(() => {
    if (show) {
      setTempSelectedOptions(Array.isArray(selectedOptions) ? [...selectedOptions] : [...defaultValue]);
    }
  }, [show, selectedOptions, type]);

  // Memoized callbacks to prevent unnecessary re-renders
  const handleApply = useCallback(() => {
    setSelectedOptions([...tempSelectedOptions]); // Spread ensures new reference
    handleClose();
  }, [tempSelectedOptions, setSelectedOptions, handleClose]);

  const handleClearAll = useCallback(() => {
    setTempSelectedOptions([...defaultValue]);
    setSelectedOptions([...defaultValue]);
  }, [setSelectedOptions]);

  // Handle checkbox toggle with memoized callback
  const handleCheckboxToggle = useCallback((option) => {
    setTempSelectedOptions((prev) =>
      prev.includes(option) ? prev.filter((item) => item !== option) : [...prev, option]
    );
  }, []);

  // Determine if we should show the range slider
  const showRangeSlider = type === "range" && Array.isArray(tempSelectedOptions) && tempSelectedOptions.length === 2;

  return (
    <Modal show={show} onHide={handleClose} aria-labelledby="filter-modal" backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title id="filter-modal">{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          {type === "checkbox" && (
            <CheckboxGrid 
              options={options} 
              selectedOptions={tempSelectedOptions} 
              onChange={handleCheckboxToggle} 
            />
          )}

          {showRangeSlider && (
            <RangeSlider 
              values={tempSelectedOptions} 
              onChange={setTempSelectedOptions} 
            />
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
});

// Add display name for debugging
FilterModal.displayName = 'FilterModal';
CheckboxGrid.displayName = 'CheckboxGrid';
RangeSlider.displayName = 'RangeSlider';

export default FilterModal;
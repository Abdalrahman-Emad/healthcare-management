import React, { useState, useEffect } from 'react';
import './MedicalHistoryModal.css';

const MedicalHistoryModal = ({ onHistorySubmit, initialHistory }) => {
    const [diagnosis, setDiagnosis] = useState(initialHistory.diagnosis || '');
    const [treatment, setTreatment] = useState(initialHistory.treatment || '');
    const [notes, setNotes] = useState(initialHistory.notes || '');

    useEffect(() => {
        // Update state when initialHistory changes
        setDiagnosis(initialHistory.diagnosis || '');
        setTreatment(initialHistory.treatment || '');
        setNotes(initialHistory.notes || '');
    }, [initialHistory]);
    
    

    const handleSubmit = () => {
        const history = { diagnosis, treatment, notes };
        onHistorySubmit(history);
    };

    const handleClose = () => {
        onHistorySubmit(null);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            handleClose();
        }
    };

    

    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <div className="modal-header">
                    <h5>Enter Medical History</h5>
                </div>
                <div className="modal-body">
                    <div className="form-group">
                        <label htmlFor="diagnosis">Diagnosis</label>
                        <input
                            id="diagnosis"
                            type="text"
                            value={diagnosis}
                            onChange={(e) => setDiagnosis(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="treatment">Treatment</label>
                        <input
                            id="treatment"
                            type="text"
                            value={treatment}
                            onChange={(e) => setTreatment(e.target.value)}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="notes">Notes</label>
                        <textarea
                            id="notes"
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className="form-control"
                            rows="4"
                        />
                    </div>
                </div>
                <div className="modal-footer">
                    <button onClick={handleSubmit} className="btn btn-primary">Save</button>
                    <button onClick={handleClose} className="btn btn-secondary">Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default MedicalHistoryModal;

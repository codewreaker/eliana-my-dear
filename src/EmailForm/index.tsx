/* eslint-disable @typescript-eslint/no-explicit-any */
import { type FC, useState } from "react";
import { isDevelopment } from "std-env";

const API_URL = isDevelopment ? 'http://localhost:3001/api/send-email' : '/api/send-email';

const EmailForm: FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                const errorData = await response.json();
                const error = new Error(errorData.message);
                error.stack = errorData.stack;
                throw error;
            }

            setIsSubmitting(false);
            setSubmitted(true);

            // Reset after 3 seconds
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', message: '' });
            }, 3000);
        } catch (error: any) {
            console.error('Error sending email:', error);
            setIsSubmitting(false);
            setError(error);
        }
    };

    const closeForm = () => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
        setError(null);
    };



    return (
        <div className="visitorTributeContainer" onClick={(e) => e.target === e.currentTarget && closeForm()}>
            {error ? (
                <div className="error-message">
                    <div className="error-icon">🔥</div>
                    <div className="error-text">Error</div>
                    <div className="error-subtext">{error.message}</div>
                    <pre className="error-stack">{error.stack}</pre>
                    <button onClick={() => setError(null)} className="close-button">Close</button>
                </div>
            ) : submitted ? (
                <div className="success-message">
                    <div className="success-icon">🎉</div>
                    <div className="success-text">Message sent successfully!</div>
                    <div className="success-subtext">Thanks for reaching out. I'll get back to you soon.</div>
                </div>
            ) : (

                <form className="tributeForm" onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        className="tributeInput"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        className="tributeInput"
                        placeholder="Your email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                    />

                    <textarea
                        name="message"
                        className="tributeTextarea"
                        placeholder="Share your message..."
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                    />

                    <button
                        type="button"
                        className="tributeSubmitButton"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? (
                            <>
                                <span className="loading-spinner"></span>
                                Creating ticket...
                            </>
                        ) : (
                            'Send Message'
                        )}
                    </button>
                </form>
            )}
        </div>
    )
}


export default EmailForm
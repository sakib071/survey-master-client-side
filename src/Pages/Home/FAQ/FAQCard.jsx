
const FAQCard = ({ data, index }) => {
    const { question, answer } = data;

    return (
        <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-1" id={`accordion-${index}`} />
            <div className="collapse-title text-xl font-medium">
                {question}
            </div>
            <div className="collapse-content">
                <p>{answer}</p>
            </div>
        </div>
    );
};

export default FAQCard;
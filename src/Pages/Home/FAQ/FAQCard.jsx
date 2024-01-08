
const FAQCard = ({ data, index }) => {
    const { question, answer } = data;

    return (
        <div className="collapse collapse-arrow">
            <input type="radio" name="my-accordion-1" id={`accordion-${index}`} />
            <div className="collapse-title text-md lg:text-xl font-medium">
                {question}
            </div>
            <div className="collapse-content text-justify">
                <p className="px-5">{answer}</p>
            </div>
        </div>
    );
};

export default FAQCard;
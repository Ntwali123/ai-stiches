/* eslint-disable react/prop-types */
import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        className="aipicker-textarea"
        placeholder="Generate AI Image..."
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        />

        <div className="flex flex-wrap gap-3">
          {generatingImg ? (
            <CustomButton
            type="outline"
            title="Generating..."
            customStyles="text-xs"
            />
          ) : (
            <>
              <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyles="text-xs"
              />

              <CustomButton
              type="filled"
              title="AI Texture"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
              />
            </>
          )
          }
        </div>
    </div>
  )
}

export default AIPicker
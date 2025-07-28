import {MessageSquare} from "lucide-react";

const Header = () => {
    return (
        <div>

          <div className="p-3 bg-dark-bg-secondary w-fit rounded-xl">
              <MessageSquare size={32} className="stroke-dark-text-primary fill-dark-text-primary" />
          </div>

            <div className="mt-12 flex flex-col gap-10">
                <h2 className="font-bold text-6xl">Hi there!</h2>
                <h2 className="font-bold text-6xl">What would you like to know?</h2>
                <p className="font-normal text-3xl text-dark-text-secondary whitespace-pre-line">Use one of the most common prompts bellow {"\n"} or ask your own question</p>
            </div>

        </div>
    );
};

export default Header;

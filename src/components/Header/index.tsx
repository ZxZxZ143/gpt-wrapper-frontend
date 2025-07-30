import {MessageSquare} from "lucide-react";

const Header = () => {
    return (
        <header>

          <div className="p-3 bg-dark-bg-secondary w-fit rounded-xl">
              <MessageSquare className="stroke-dark-text-primary lg:w-12 sm:w-8 w-6 h-auto fill-dark-text-primary" />
          </div>

            <div className="mt-12 flex flex-col lg:gap-10 sm:gap-8 gap-6">
                <h2 className="font-bold lg:text-6xl sm:text-4xl text-2xl">Hi there!</h2>
                <h2 className="font-bold lg:text-6xl sm:text-4xl text-2xl">What would you like to know?</h2>
                <p className="font-normal lg:text-3xl sm:text-xl text-xl text-dark-text-secondary whitespace-pre-line">Use one of the most common prompts bellow {"\n"} or ask your own question</p>
            </div>

        </header>
    );
};

export default Header;

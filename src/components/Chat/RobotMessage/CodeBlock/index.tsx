import React, {FC, useEffect, useRef} from 'react';
import Prism from 'prismjs';

type CodeBlockProps = {
    code: string;
    language: string;
}

const CodeBlock: FC<CodeBlockProps> = ({language, code}) => {
    const codeRef = useRef(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code, language, codeRef]);

    return (
        <pre>
            <code ref={codeRef} className={`language-${language}`}>
                {code}
            </code>
        </pre>
    );
};

export default CodeBlock;

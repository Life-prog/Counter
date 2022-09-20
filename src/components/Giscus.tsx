import Giscus from '@giscus/react';

export default function Comments() {
    return (
        <Giscus
            id="comments"
            repo="Life-prog/Counter"
            repoId="R_kgDOIB95Vg"
            category="Comments"
            categoryId="DIC_kwDOIB95Vs4CRiN-"
            mapping="url"
            emitMetadata="0"
            reactions-enabled="0"
            strict="0"
            inputPosition="top"
            theme="dark_tritanopia"
            lang="en"
            loading="lazy"
        />
    );
}
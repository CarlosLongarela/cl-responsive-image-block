import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
    const { desktopImage, mobileImage, imageLink, altText, disableLazyLoading, openInNewWindow } = attributes;

    if (!desktopImage) return null;

    const blockProps = useBlockProps.save({
        className: 'cl-responsive-image'
    });

    const picture = (
        <picture className="cl-responsive-image-picture">
            {mobileImage && <source srcSet={mobileImage} media="(max-width: 768px)" />}
            <img
                src={desktopImage}
                alt={altText || ''}
                className="cl-responsive-image-img"
                loading={disableLazyLoading ? "eager" : "lazy"}
            />
        </picture>
    );

    return (
        <div {...blockProps}>
            {imageLink ? (
                <a
                    href={imageLink}
                    target={openInNewWindow ? "_blank" : "_self"}
                    rel={openInNewWindow ? "noopener noreferrer" : undefined}
                    className="cl-responsive-image-link"
                >
                    {picture}
                </a>
            ) : picture}
        </div>
    );
}

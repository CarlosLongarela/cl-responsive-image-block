import { MediaUpload, InspectorControls, useBlockProps } from '@wordpress/block-editor';
import { Button, TextControl, PanelBody, CheckboxControl } from '@wordpress/components';
import { Fragment } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
    const { desktopImage, mobileImage, imageLink, altText, disableLazyLoading } = attributes;

    const blockProps = useBlockProps({
        className: 'cl-responsive-image'
    });

    return (
        <Fragment>
            <InspectorControls>
                <PanelBody title="Configuración de imagen" initialOpen={true}>
                    <TextControl
                        label="Enlace de la imagen"
                        value={imageLink}
                        onChange={(value) => setAttributes({ imageLink: value })}
                    />

                    <TextControl
                        label="Texto alternativo"
                        value={altText}
                        onChange={(value) => setAttributes({ altText: value })}
                    />

                    <CheckboxControl
                        label="Deshabilitar lazy loading"
                        checked={disableLazyLoading}
                        onChange={(value) => setAttributes({ disableLazyLoading: value })}
                    />
                </PanelBody>
            </InspectorControls>

            <div {...blockProps}>
                <div className="cl-responsive-image-editor">
                <MediaUpload
                    onSelect={(media) => setAttributes({ desktopImage: media.url })}
                    allowedTypes={['image']}
                    render={({ open }) => (
                        <Button onClick={open} variant="primary" style={{ marginBottom: '10px' }}>
                            {desktopImage ? 'Cambiar imagen de escritorio' : 'Seleccionar imagen de escritorio'}
                        </Button>
                    )}
                />
                {desktopImage && <img src={desktopImage} alt="Vista previa escritorio" style={{ width: '100%', maxWidth: '400px', marginBottom: '20px' }} />}

                <MediaUpload
                    onSelect={(media) => setAttributes({ mobileImage: media.url })}
                    allowedTypes={['image']}
                    render={({ open }) => (
                        <Button onClick={open} variant="secondary" style={{ marginBottom: '10px' }}>
                            {mobileImage ? 'Cambiar imagen móvil' : 'Seleccionar imagen móvil'}
                        </Button>
                    )}
                />
                {mobileImage && <img src={mobileImage} alt="Vista previa móvil" style={{ width: '100%', maxWidth: '200px', marginBottom: '20px' }} />}
                </div>
            </div>
        </Fragment>
    );
}

import { FC, useState, useEffect, ReactNode } from 'react';
import Slides from '../components/Slides/Slides';
import Table from '../components/UI/Table/Table';

const templateString = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac libero turpis. Fusce commodo dolor et nulla
scelerisque vulputate. Phasellus tempus nunc nec augue pulvinar varius. Nam ultricies, tortor et tempus
tincidunt, quam velit sagittis justo, a laoreet sapien nisi id mauris. Duis ut risus venenatis, feugiat sem
vitae, rhoncus ligula. Mauris pulvinar lorem mauris, quis euismod nisi dignissim a. Vestibulum a ante ante.
Donec ut ullamcorper ante. Nulla vel aliquet nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
In dictum at diam varius vulputate. Nullam ornare, eros at rutrum mattis, dolor nisl lacinia massa, sit amet
efficitur erat velit in arcu. Praesent placerat convallis pellentesque. Sed id dapibus quam. Aenean ex arcu,
ornare non risus mollis, varius ultricies metus. Aenean quis efficitur lectus. Praesent nec vehicula enim.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dignissim felis id faucibus dictum.`;

const rowCnt = 20;
const getData = () =>
  Array.from({ length: rowCnt }).map((item, rowIndex) => ({
    id: `${rowIndex}`,
    name: `value_${rowIndex}`,
    value: Math.random(),
    some_parameter: Math.random(),
  }));

export enum Sections {
  section_1 = 'Section 1',
  section_2 = 'Section 2',
  section_3 = 'Section 3',
  section_4 = 'Section 4',
}

const SlidePage: FC = () => {
  const [activeSection, setActiveSection] = useState(Sections.section_1);
  const [leftSlide, setLeftSlide] = useState<null | ReactNode>(null);
  const [rightSlide, setRightSlide] = useState<null | ReactNode>(null);
  const [isLoading, setIsLoading] = useState(false);

  const fakeFetch = async () => {
    return new Promise(function (resolve) {
      setTimeout(resolve, 500);
    });
  };

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      await fakeFetch();
      const data = getData();
      setLeftSlide(
        <Table
          headers={{
            id: 'Id',
            name: 'Name',
            value: 'Value',
            some_parameter: 'Value1',
          }}
          items={data}
        />
      );
      setRightSlide(<div>{templateString}</div>);
      setIsLoading(false);
    })();
  }, [activeSection]);

  return (
    <Slides
      activeSection={activeSection}
      setActiveSection={setActiveSection}
      leftSlide={leftSlide}
      rightSlide={rightSlide}
      isLoading={isLoading}
    />
  );
};

export default SlidePage;

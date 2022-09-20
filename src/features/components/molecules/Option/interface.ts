export default interface OptionProps {
  onToggle: (index: number) => void;
  indexs: number;
  className?: string;
  activeState?: number
}
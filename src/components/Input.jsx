export default function Input(props) {
    return (
      <div className="flex flex-col gap-1">
        <label
          className="text-[12px] font-bold lg:text-[16px] text-[#474747]"
          for={props.id}
        >
          {props.title}
        </label>
        <input
          className="w-full p-3 rounded text-[14px] lg:text-[16px] text-[#666666] bg-[var(--light-gray-3)] focus:outline-none"
          type={props.type}
          name={props.name}
          id={props.id}
          placeholder={props.placeholder}
          required
        />
      </div>
    );
  }